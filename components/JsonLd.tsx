interface JsonLdProps {
    schema: object | object[];
}

/**
 * Injecte un ou plusieurs schémas Schema.org.
 * Le contenu vient exclusivement de nos propres constantes (lib/seo.ts),
 * jamais d'une saisie utilisateur.
 */
export function JsonLd({ schema }: JsonLdProps) {
    const payload = Array.isArray(schema) ? schema : [schema];

    return (
        <>
            {payload.map((item, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(item).replace(/</g, '\\u003c'),
                    }}
                />
            ))}
        </>
    );
}
