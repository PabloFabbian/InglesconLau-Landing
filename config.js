const CONFIG = {
    // Configuración de Contacto y Precios
    WHATSAPP_NUMBER: "5491138108867",
    PRECIO_POR_HORA: "$30.000 ARS",

    // Paleta de Colores Oficial (Sincronizada con styles.css)
    COLORS: {
        ink: "#0f0e0d",
        cream: "#f7f4ef",
        accent: "#c8472a",
        accentLight: "#f0d9d4",
        muted: "#6b6560",
        border: "#e2ddd7"
    },

    // Todos los textos e información de la interfaz
    CONTENT: {
        // Metas y Header generales
        siteTitle: "Laura — Inglés para profesionales",
        navLogo: "Laura",
        navCta: "Reservar clase gratuita",

        // Hero Section
        heroTag: "Inglés para profesionales y universitarios",
        heroHeadline: "Dejá de entender<br>y empezá a<br><em>hablar.</em>",
        heroSub: "Clases 1 a 1 con una profesora universitaria. Si necesitás el inglés para trabajar, emigrar, o finalmente animarte a hablar — este es el lugar.",
        heroCtaText: "Reservar una clase<br>de prueba gratis",
        heroTrust: "Sin compromiso. Solo 30 minutos para conocer tu nivel.",

        // Badges flotantes e imágenes (Hero)
        badges: {
            efSetTitle: "EF SET C2",
            efSetSubtitle: "Nivel más alto en inglés",
            experience: "<strong>+5 años</strong> enseñando inglés"
        },

        // Proof Strip (Contadores e info destacada)
        proofs: [
            { num: "C2", label: "EF SET — nivel máximo" },
            { num: "UCA", label: "Profesorado universitario" },
            { num: "1 a 1", label: "Clases personalizadas" },
            { num: "Online", label: "Desde cualquier lugar" }
        ],

        // For Whom (Para quién es)
        forWhomLabel: "Para quién es esto",
        forWhomTitle: "Si te identificás con alguno de estos, estás en el lugar correcto.",
        problems: [
            {
                num: "01",
                title: "Entendés pero no hablás",
                desc: "Años de inglés escolar, películas en V.O., pero cuando alguien te habla — la mente se congela. Eso tiene solución."
            },
            {
                num: "02",
                title: "Necesitás el inglés para trabajar",
                desc: "Reuniones con clientes externos, entrevistas internacionales, presentaciones en inglés. No es un hobby — es tu carrera."
            },
            {
                num: "03",
                title: "Querés emigrar",
                desc: "El inglés es el primer paso real. Visa, entrevistas, vida cotidiana en otro país — empecemos por ahí."
            }
        ],

        // How It Works (Cómo funciona)
        howLabel: "Cómo funciona",
        howTitle: "Sin cursos grabados. Sin grupos de 20 personas.<br>Solo vos y Laura.",
        steps: [
            {
                num: "Paso 01",
                title: "Clase de diagnóstico gratis",
                desc: "30 minutos para entender tu nivel real, tus objetivos y qué te frena. Sin presión, sin venta agresiva."
            },
            {
                num: "Paso 02",
                title: "Plan a medida",
                desc: "No hay un programa genérico. Laura arma un recorrido según lo que necesitás — conversación, trabajo, viaje o examen."
            },
            {
                num: "Paso 03",
                title: "Clases semanales 1 a 1",
                desc: "Horarios flexibles, seguimiento real del progreso. Vas a notar la diferencia antes de lo que pensás."
            }
        ],

        // Testimonials
        testimonialsLabel: "Lo que dicen",
        testimonialsTitle: "Personas reales, resultados reales.",
        testimonialsList: [
            {
                text: "Llevaba años \"estudiando inglés\" sin hablar. Con Laura en tres meses pasé de no poder arrancar una oración a tener reuniones en inglés en el trabajo.",
                author: "Martín G.",
                role: "Analista de datos, Buenos Aires"
            },
            {
                text: "Me ayudó específicamente con el inglés que necesitaba para emigrar. CV, entrevistas, conversación cotidiana. Muy paciente y muy exigente a la vez — la combinación perfecta.",
                author: "Valeria M.",
                role: "Diseñadora, actualmente en Barcelona"
            },
            {
                text: "Logré desbloquear la fluidez que me faltaba para hablar con clientes del exterior. Las clases van directo a lo que necesitás resolver en el día a día profesional.",
                author: "Santiago L.",
                role: "Project Manager, remoto"
            },
            {
                text: "Perdía muchas oportunidades por miedo a trabarme. Las simulaciones de reuniones reales me dieron la confianza que ninguna academia tradicional logró darme.",
                author: "Tomás B.",
                role: "Software Engineer, Uruguay"
            }
        ],

        // Final CTA
        ctaEyebrow: "Empezá hoy",
        ctaHeadline: "La primera clase es gratis.<br>Sin excusas.",
        ctaSub: "30 minutos para conocerte, entender qué necesitás y mostrarte cómo podemos trabajar juntos. Sin compromiso.",
        ctaBtnText: "Reservar por WhatsApp →",
        ctaGuaranteePattern: "Precio por hora: {precio} · Clases individuales · Horarios a acordar",

        // Footer
        footerNote: "© 2026 · Profesora de Inglés · Buenos Aires, Argentina"
    }
};

window.APP_CONFIG = CONFIG;