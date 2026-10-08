import Image from 'next/image';

export function FiduLogo({ inverse = false, className = '' }: { inverse?: boolean; className?: string }) {
    return (
        <Image
            src={inverse ? '/brand/fiduconnect-reverse.svg' : '/brand/fiduconnect-color.svg'}
            alt="FIDUCONNECT."
            width={507}
            height={72}
            className={`h-auto ${className}`}
        />
    );
}
