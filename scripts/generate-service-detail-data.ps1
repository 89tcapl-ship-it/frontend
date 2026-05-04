param(
  [string]$DocxPath = 'C:\Users\Sakshi\Downloads\89TCA_Services_Guide_v2.docx',
  [string]$OutputPath = 'C:\Users\Sakshi\Downloads\frontend\ship-it-frontend\src\data\serviceDetailData.ts'
)

Add-Type -AssemblyName System.IO.Compression.FileSystem

function Get-DocxParagraphs {
  param([string]$Path)

  $zip = [System.IO.Compression.ZipFile]::OpenRead($Path)
  try {
    $entry = $zip.Entries | Where-Object { $_.FullName -eq 'word/document.xml' }
    $reader = New-Object System.IO.StreamReader($entry.Open())
    try {
      [xml]$doc = $reader.ReadToEnd()
    } finally {
      $reader.Close()
    }

    $ns = New-Object System.Xml.XmlNamespaceManager($doc.NameTable)
    $ns.AddNamespace('w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')

    $doc.SelectNodes('//w:p', $ns) | ForEach-Object {
      (($_.SelectNodes('.//w:t', $ns) | ForEach-Object { $_.'#text' }) -join '').Trim()
    }
  } finally {
    $zip.Dispose()
  }
}

function Escape-TsString {
  param([string]$Text)
  if ($null -eq $Text) { return '' }
  return $Text.Replace('\', '\\').Replace('"', '\"')
}

function Format-TsArray {
  param([string]$Name, [string[]]$Items, [string]$Indent = '    ')
  if (-not $Items -or $Items.Count -eq 0) { return $null }

  $lines = New-Object System.Collections.Generic.List[string]
  $lines.Add($Indent + $Name + ': [')
  foreach ($item in $Items) {
    $lines.Add("$Indent  `"$((Escape-TsString $item))`",")
  }
  $lines.Add("$Indent],")
  return $lines.ToArray()
}

$serviceMap = @{
  'Sole Proprietorship' = 'sole-proprietor'
  'Partnership' = 'partnership'
  'LLP (Limited Liability Partnership)' = 'llp'
  'OPC (One Person Company)' = 'opc-registration'
  'Private Limited Company' = 'private-limited-company'
  'Foreign Company – Subsidiary' = 'foreign-company-subsidiary'
  'NBFC (Non-Banking Financial Company)' = 'nbfc'
  'Trust / Society' = 'trust-societies'
  'Apartment Association' = 'apartment-association'
  'GST Registration' = 'gst'
  'Shops & Establishments (Labour) Registration' = 'shops-establishments'
  'EPF & ESI Registration' = 'epf-esi'
  'PT (Professional Tax) Registration' = 'pt'
  'Trade Licence' = 'trade-license'
  'FSSAI Registration / Licence' = 'fssai'
  'IEC (Import Export Code)' = 'iec'
  'MSME / UDYAM Registration' = 'msme-udyam'
  'DPIIT / StartUp India Registration' = 'dpiit-startup-india'
  'Book Keeping' = 'book-keeping'
  'Virtual Accountant' = 'virtual-accountant'
  'Virtual CFO' = 'virtual-cfo'
  'Payroll' = 'payroll'
  'MIS Reports' = 'mis-reports'
  'HR Services' = 'hr-services'
  'GST Compliance' = 'gst-compliance'
  'EPF Compliance' = 'epf-compliance'
  'ESI Compliance' = 'esi-compliance'
  'PT Compliance' = 'pt-compliance'
  'ITR & TDS Compliance' = 'itr-and-tds-compliance'
  'MCA Compliance' = 'mca-compliance'
  'Due Diligence' = 'due-diligence'
  'Valuation' = 'valuation'
  'Start-up Funding' = 'startup-funding'
  'FDI Compliance' = 'fdi-compliance'
  'Bank Finance' = 'bank-finance'
  'Project Reports' = 'project-reports'
  'Statutory Audits' = 'statutory-audits'
  'Income Tax Audit' = 'income-tax-audit'
  'Internal Audits' = 'internal-audits'
  'Transfer Pricing Audits' = 'transfer-pricing-audits'
  'Investigation Audit' = 'investigation-audit'
  'Compliance Health Check' = 'compliance-health-check'
}

$sectionHeadings = @('Key Benefits', 'Limitations', 'How we Support', 'Non-Compliance Risks')
$paragraphs = @(Get-DocxParagraphs -Path $DocxPath)

$services = [ordered]@{}
$current = $null
$currentSection = $null

foreach ($paragraph in $paragraphs) {
  if ([string]::IsNullOrWhiteSpace($paragraph)) {
    continue
  }

  if ($paragraph -match '^\d+\.\s' -or $paragraph -match '^[A-Z]\.\s') {
    $current = $null
    $currentSection = $null
    continue
  }

  if ($paragraph -match '^89T Corporate Advisors \|' -or $paragraph -match '^This document is prepared') {
    $current = $null
    $currentSection = $null
    continue
  }

  if ($serviceMap.ContainsKey($paragraph)) {
    $current = [ordered]@{
      title = $paragraph
      description = ''
      keyBenefits = New-Object System.Collections.Generic.List[string]
      limitations = New-Object System.Collections.Generic.List[string]
      support = New-Object System.Collections.Generic.List[string]
      nonComplianceRisks = New-Object System.Collections.Generic.List[string]
    }
    $services[$serviceMap[$paragraph]] = $current
    $currentSection = $null
    continue
  }

  if ($sectionHeadings -contains $paragraph) {
    $currentSection = $paragraph
    continue
  }

  if ($null -eq $current) {
    continue
  }

  switch ($currentSection) {
    'Key Benefits' { [void]$current.keyBenefits.Add($paragraph) }
    'Limitations' { [void]$current.limitations.Add($paragraph) }
    'How we Support' { [void]$current.support.Add($paragraph) }
    'Non-Compliance Risks' { [void]$current.nonComplianceRisks.Add($paragraph) }
    default {
      if ($current.description) {
        $current.description += ' ' + $paragraph
      } else {
        $current.description = $paragraph
      }
    }
  }
}

$lines = New-Object System.Collections.Generic.List[string]
$lines.Add('export interface ServiceDetailData {')
$lines.Add('  title: string;')
$lines.Add('  description: string;')
$lines.Add('  keyBenefits?: string[];')
$lines.Add('  limitations?: string[];')
$lines.Add('  support?: string[];')
$lines.Add('  nonComplianceRisks?: string[];')
$lines.Add('  offers?: string[];')
$lines.Add('}')
$lines.Add('')
$lines.Add('export const serviceDetailData: Record<string, ServiceDetailData> = {')

foreach ($entry in $services.GetEnumerator()) {
  $slug = $entry.Key
  $svc = $entry.Value

  $lines.Add("  `"$slug`": {")
  $lines.Add("    title: `"$((Escape-TsString $svc.title))`",")
  $lines.Add("    description: `"$((Escape-TsString $svc.description))`",")

  foreach ($arrayName in @('keyBenefits', 'limitations', 'support', 'nonComplianceRisks')) {
    $formatted = Format-TsArray -Name $arrayName -Items $svc.$arrayName
    if ($formatted) {
      foreach ($line in $formatted) {
        $lines.Add($line)
      }
    }
  }

  $lines.Add('  },')
  $lines.Add('')
}

$lines.Add('};')
$lines.Add('')
$lines.Add('export default serviceDetailData;')

Set-Content -Path $OutputPath -Value ($lines -join "`r`n") -Encoding utf8
