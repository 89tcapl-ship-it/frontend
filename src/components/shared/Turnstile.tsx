import Turnstile from 'react-turnstile';

interface TurnstileProps {
    onVerify: (token: string) => void;
    onError?: (error: any) => void;
}

export const TurnstileWidget: React.FC<TurnstileProps> = ({ onVerify, onError }) => {
    const siteKey = import.meta.env.VITE_CLOUDFLARE_SITE_KEY;

    if (!siteKey || siteKey === 'YOUR_SITE_KEY') {
        return null;
    }

    return (
        <div className="flex justify-center my-4">
            <Turnstile
                sitekey={siteKey}
                onVerify={onVerify}
                onError={onError}
                theme="light"
            />
        </div>
    );
};
