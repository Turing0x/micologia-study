export type GlossaryCategory =
  | 'morfologia'
  | 'diagnostico'
  | 'candidiasis'
  | 'dermatofitos'
  | 'aspergillus'
  | 'farmacologia'
  | 'tecnicas'
  | 'api20c';

export interface GlossaryEntry {
  term: string;
  definition: string;
  category: GlossaryCategory;
  mnemonic?: string;
}

export const glossaryEntries: GlossaryEntry[] = [
  // A
  { term: 'Ag (Antígeno)', definition: 'Molécula reconocible por el sistema inmune usada en técnicas diagnósticas. En micología, se detecta el Ag de Cryptococcus (látex) y el Ag Galactomanano (Aspergillus).', category: 'diagnostico' },
  { term: 'Agar Czapek', definition: 'Medio de cultivo selectivo usado para la identificación de Aspergillus spp. Favorece la esporulación y la expresión de caracteres morfológicos característicos.', category: 'tecnicas' },
  { term: 'Agar patata dextrosa (PDA)', definition: 'Medio de cultivo rico en almidón que favorece la esporulación de dermatofitos. Se usa en la identificación de Trichophyton, Microsporum y Epidermophyton.', category: 'tecnicas' },
  { term: 'Agar Sabouraud (SDA)', definition: 'Medio de cultivo universal para hongos. Contiene glucosa y peptona. Bajo pH (5,6) inhibe la mayoría de bacterias. Existe en versión con antibióticos para muestras contaminadas.', category: 'tecnicas', mnemonic: 'Universal para TODOS los hongos' },
  { term: 'Anfotericina B', definition: 'Antifúngico poliénico de amplio espectro. Se une al ergosterol de la membrana fúngica. Resistencia notable en C. lusitaniae. Tratamiento de elección en muchas micosis sistémicas graves.', category: 'farmacologia' },
  { term: 'Antropofílico', definition: 'Tipo ecológico de dermatofito cuyo reservorio principal es el ser humano. Generalmente produce infecciones menos inflamatorias pero más crónicas. Ejemplos: T. rubrum, E. floccosum, T. violaceum.', category: 'dermatofitos' },
  { term: 'API 20 C AUX', definition: 'Sistema de identificación de levaduras de bioMérieux basado en 19 pruebas de asimilación de carbohidratos. Permite identificar las especies de Candida y otras levaduras clínicamente relevantes.', category: 'api20c' },
  { term: 'Asimilación', definition: 'Capacidad de un microorganismo de utilizar un sustrato como única fuente de carbono para su crecimiento. Principio del sistema API 20 C AUX.', category: 'api20c' },
  { term: 'Aspergiloma', definition: 'Masa de hifas de Aspergillus que coloniza cavidades pulmonares preexistentes (cavernas tuberculosas, bullas). No invade tejido. Forma crónica no invasora de aspergilosis.', category: 'aspergillus' },
  { term: 'Aspergilosis Invasiva (AI)', definition: 'Infección grave por Aspergillus que invade tejidos profundos. Afecta principalmente a pacientes inmunodeprimidos (neutropénicos, HSCT). Mortalidad muy elevada. Principal agente: A. fumigatus.', category: 'aspergillus' },
  { term: 'Azoles', definition: 'Grupo de antifúngicos que inhiben la síntesis de ergosterol (inhibición del citocromo P450 fúngico CYP51). Incluyen fluconazol, voriconazol, itraconazol, posaconazol. Algunas Candida tienen resistencia intrínseca.', category: 'farmacologia' },
  // B
  { term: 'BAL (Lavado Broncoalveolar)', definition: 'Técnica de obtención de muestra del tracto respiratorio inferior. En inmunosuprimidos tiene un VPP >80% para Candida. Sensibilidad del 20–60% para Aspergillus.', category: 'diagnostico' },
  { term: 'Balanitis', definition: 'Infección de Candida en el glande del pene. Se presenta en pareja de mujer con vaginitis candidiásica, en diabéticos o inmunosuprimidos. Eritema, micropústulas y erosiones superficiales.', category: 'candidiasis' },
  { term: 'β-D-Glucano', definition: 'Componente de la pared celular de la mayoría de hongos patógenos (excepto Cryptococcus y zigomicetos). Marcador sérico inespecífico de infección fúngica invasora (IFI). Positivo en candidiasis, aspergilosis y pneumocistosis.', category: 'diagnostico' },
  { term: 'Biseriado', definition: 'Tipo de cabeza aspergilar en la que los conidios se producen a través de dos capas: métulas (sobre la vesícula) y luego fiálides (sobre las métulas). Presente en A. niger, A. terreus, A. flavus.', category: 'aspergillus' },
  { term: 'Blanco de Calcoflúor', definition: 'Tinción fluorescente que se une a la quitina de la pared celular fúngica. Requiere microscopio de fluorescencia. Alta sensibilidad para detectar hongos en muestras directas.', category: 'tecnicas' },
  { term: 'Blastoconidio', definition: 'Célula fúngica redondeada u oval que se reproduce por gemación. Forma de crecimiento principal de las levaduras como Candida spp.', category: 'morfologia' },
  // C
  { term: 'Cabeza Aspergilar', definition: 'Estructura reproductora de Aspergillus: conidióforo + vesícula + fiálides (± métulas) + cadenas de fialoconidias. Clave para la identificación microscópica de la especie.', category: 'aspergillus' },
  { term: 'Candidemia', definition: 'Presencia de Candida spp. en el torrente sanguíneo. Representa el 5–10% de las sepsis nosocomiales. Mortalidad ~40%. Diagnóstico por hemocultivo (sensibilidad ~50%).', category: 'candidiasis', mnemonic: 'Mortalidad 40%, sensibilidad hemocultivo 50%' },
  { term: 'Candidiasis invasora', definition: 'Término que engloba candidemia, endocarditis, meningitis, endoftalmitis y afectación de órganos profundos por Candida. Excluye las formas superficiales y orofaríngeas.', category: 'candidiasis' },
  { term: 'Candidiasis orofaríngea (Muguet)', definition: 'Placas blanquecinas en lengua y mucosa oral que se desprenden al rasparlas. Más frecuente en neonatos, inmunodeprimidos y usuarios de antibióticos.', category: 'candidiasis' },
  { term: 'Cicloheximida', definition: 'Antibiótico añadido al medio Mycobiotic agar. Inhibe hongos saprófitos y contaminantes, pero no a los dermatofitos, haciendo este medio selectivo para ellos.', category: 'tecnicas' },
  { term: 'Clamidospora', definition: 'Espora asexual de pared gruesa formada por una hifa. En Candida albicans, las clamidosporas terminales son una característica diagnóstica relevante (en agar harina de maíz + Tween 80).', category: 'morfologia' },
  { term: 'Conidióforo', definition: 'Hifa especializada que porta los conidios. En Aspergillus, el conidióforo surge del pie (célula de pie) y termina en la vesícula.', category: 'morfologia' },
  { term: 'Conidio (Conidia)', definition: 'Espora asexual producida por los hongos filamentosos. En Aspergillus, las fialoconidias se producen en cadenas desde las fiálides. En dermatofitos se distinguen macro y microconidias.', category: 'morfologia' },
  // D
  { term: 'Dermatofito', definition: 'Hongo queratinofílico capaz de invadir la capa córnea de piel, pelo y uñas. Tres géneros: Trichophyton, Microsporum y Epidermophyton. Causan las dermatofitosis o tiñas.', category: 'dermatofitos' },
  { term: 'Dermatofitosis', definition: 'Micosis superficial causada por dermatofitos. Clasificada topográficamente: tinea capitis, corporis, cruris, pedis, unguium, manuum, barbae.', category: 'dermatofitos' },
  { term: 'Dimorfismo', definition: 'Capacidad de ciertos hongos de crecer como levadura (37°C, en tejido) o como moho (25°C, en ambiente). Característica de Histoplasma, Coccidioides, Sporothrix.', category: 'morfologia', mnemonic: '37°C = levadura (en el cuerpo); 25°C = moho (en la naturaleza)' },
  // E
  { term: 'Esofagitis candidiásica', definition: 'Infección del esófago por Candida. Asociada a SIDA y pacientes hematológicos. Síntomas: odinofagia, disfagia, dolor torácico. Diagnóstico: endoscopia + biopsia.', category: 'candidiasis' },
  { term: 'Examen directo', definition: 'Primera aproximación diagnóstica en micología. Observación de la muestra clínica al microscopio tras KOH, calcoflúor u otras tinciones. Detecta presencia de hongos pero no identifica la especie.', category: 'diagnostico' },
  // F
  { term: 'Fiálide', definition: 'Célula productora de conidios en Aspergillus. Se disponen sobre la vesícula directamente (uniseriado) o sobre métulas (biseriado). El ángulo de disposición (180° vs 360°) identifica la especie.', category: 'aspergillus' },
  { term: 'Flora normal (microbiota)', definition: 'C. albicans forma parte de la flora normal de mucosas GI, respiratoria y genitourinaria (cavidad oral del 60%, vagina del 70%, piel del 20% de personas sanas). Se convierte en patógena cuando se altera el equilibrio.', category: 'candidiasis' },
  { term: 'Fomites', definition: 'Objetos inanimados que actúan como vehículo de transmisión de dermatofitos. Ejemplos: peines, toallas, ropa de cama, gorros, suelos de vestuarios. Transmisión indirecta.', category: 'dermatofitos' },
  { term: 'Fluconazol', definition: 'Azol de primera generación. C. krusei tiene resistencia intrínseca. C. glabrata y C. guilliermondii presentan sensibilidad reducida. No activo frente a Aspergillus.', category: 'farmacologia' },
  // G
  { term: 'Galactomanano (GM)', definition: 'Polisacárido de la pared celular de Aspergillus spp. detectable en sangre y BAL. Marcador serológico específico de aspergilosis invasiva. No detecta Candida.', category: 'diagnostico', mnemonic: 'GALactomanano → GALlináceas (Aspergillus, no Candida)' },
  { term: 'Gemación (brotación)', definition: 'Reproducción asexual de las levaduras. Una célula hija (blastoconidio) crece a partir de la célula madre. Cuando no se produce separación, se forman pseudohifas.', category: 'morfologia' },
  { term: 'Geofílico', definition: 'Tipo ecológico de dermatofito cuyo reservorio es el suelo. Produce inflamación intensa al infectar al humano. Ejemplo: Microsporum gypseum.', category: 'dermatofitos' },
  // H
  { term: 'Hemocultivo', definition: 'Cultivo de sangre para detectar microorganismos. En candidemia: 2 hemocultivos de 10–20 ml. Sensibilidad limitada (~50%) para hongos.', category: 'diagnostico' },
  { term: 'Hifa', definition: 'Filamento tubular que constituye la unidad estructural de los hongos filamentosos. Puede ser septada (Aspergillus, dermatofitos) o cenocítica/aseptada (Mucorales). El conjunto forma el micelio.', category: 'morfologia' },
  { term: 'Hifa en espiral', definition: 'Hifa que adopta una forma helicoidal. Característica de Trichophyton mentagrophytes. Útil en la diferenciación de géneros de dermatofitos.', category: 'dermatofitos' },
  { term: 'HSCT (Trasplante de Progenitores Hematopoyéticos)', definition: 'Procedimiento para enfermedades hematológicas malignas. El período post-trasplante con neutropenia intensa es el mayor factor de riesgo de IFI por Aspergillus (8–15% de los pacientes).', category: 'aspergillus' },
  // I
  { term: 'IFI (Infección Fúngica Invasora)', definition: 'Infección por hongos que compromete tejidos profundos o torrente sanguíneo. Principales agentes en HSCT: Aspergillus (45–70%), Candida (7–20%).', category: 'diagnostico' },
  { term: 'Intertrigo candidósico', definition: 'Infección de Candida en grandes pliegues cutáneos (inguinal, submamario, interdigital). Favorecida por la humedad y la maceración.', category: 'candidiasis' },
  // K
  { term: 'KOH (Hidróxido de Potasio)', definition: 'Reactivo usado en el examen directo micológico. Concentraciones del 10–30%. Digiere la queratina y las células del huésped, dejando visibles las estructuras fúngicas. Mejor efecto añadiendo tinta Parker.', category: 'tecnicas' },
  { term: 'Querion (Kerion)', definition: 'Forma inflamatoria grave de tinea capitis. Placa supurativa con foliculitis y alopecia cicatricial. Generalmente causada por dermatofitos zoofílicos (T. verrucosum, M. canis).', category: 'dermatofitos' },
  // L
  { term: 'Levadura', definition: 'Hongo unicelular de forma redondeada u oval. Reproducción por gemación. Colonias cremosas en cultivo. Algunas (como C. albicans) pueden formar pseudohifas e hifas verdaderas.', category: 'morfologia' },
  // M
  { term: 'Macroconidias', definition: 'Esporas asexuales grandes y multicelulares. Clave en la identificación de dermatofitos: Epidermophyton (palo de golf), Trichophyton (forma lápiz), Microsporum (fusiforme con pared rugosa).', category: 'morfologia' },
  { term: 'MALDI-TOF', definition: 'Técnica de espectrometría de masas para identificación rápida de microorganismos. Identifica el perfil proteico del hongo en minutos. Cada vez más usada en lugar del API o pruebas bioquímicas clásicas.', category: 'diagnostico' },
  { term: 'McFarland', definition: 'Escala de turbidez para estandarizar la concentración de una suspensión microbiana. En el API 20 C AUX se usa el McFarland nº 2 (~6×10⁸ UFC/ml).', category: 'api20c' },
  { term: 'Micelio', definition: 'Conjunto de hifas que forma el cuerpo vegetativo de un hongo filamentoso. El micelio aéreo porta las estructuras reproductoras; el vegetativo absorbe nutrientes.', category: 'morfologia' },
  { term: 'Microconidias', definition: 'Esporas asexuales pequeñas y unicelulares. En dermatofitos: Trichophyton produce muchas (redondas o en lágrima); Microsporum produce pocas; Epidermophyton no produce ninguna.', category: 'morfologia' },
  { term: 'Mycobiotic Agar', definition: 'Medio de cultivo selectivo para dermatofitos que contiene cicloheximida. Inhibe hongos contaminantes saprófitos pero permite el crecimiento de Trichophyton, Microsporum y Epidermophyton.', category: 'tecnicas' },
  // N
  { term: 'Neutropenia', definition: 'Disminución de neutrófilos en sangre (<500/μL en neutropenia severa). Principal factor de riesgo de IFI por Aspergillus y Candida. Frecuente tras quimioterapia o trasplante.', category: 'diagnostico' },
  // O
  { term: 'Onicomicosis (Tinea unguium)', definition: 'Infección fúngica de las uñas. Forma de dermatofitosis de mayor dificultad diagnóstica y de tratamiento. Formas: subungueal distal, subungueal proximal, distrofia total.', category: 'dermatofitos' },
  // P
  { term: 'PCR (Reacción en Cadena de la Polimerasa)', definition: 'Técnica de biología molecular de alta sensibilidad para detectar ADN fúngico. En micología, útil en sangre y BAL para Aspergillus y Candida. Pendiente de mayor estandarización.', category: 'diagnostico' },
  { term: 'Pseudohifa', definition: 'Cadena de levaduras alargadas que se forma cuando tras la gemación no se produce separación celular. Las células quedan unidas formando un filamento con constricción en los tabiques. Característica de Candida spp.', category: 'morfologia' },
  { term: 'Prueba de la ureasa', definition: 'Prueba bioquímica que detecta la producción de ureasa. Diferencia T. mentagrophytes (ureasa +) de T. rubrum (ureasa −). Prueba clave para distinguir estas dos especies.', category: 'tecnicas', mnemonic: 'menTagrophytes → Tiene ureasa; Rubrum → no la tiene' },
  { term: 'Prueba del tubo germinativo', definition: 'Incubación de Candida en suero humano a 37°C durante 2–3 horas. Si se forma un tubo filamentoso sin estrangulamiento → positivo → C. albicans (o C. dubliniensis). Prueba de identificación rápida y presuntiva.', category: 'candidiasis', mnemonic: 'Solo albicans (y dubliniensis) hacen el tubo' },
  // R
  { term: 'Resistencia intrínseca', definition: 'Resistencia a un antifúngico propia de la especie, no adquirida. C. krusei: intrínsecamente resistente a fluconazol. C. lusitaniae: a anfotericina B.', category: 'farmacologia' },
  // S
  { term: 'Septado', definition: 'Hifa que presenta tabiques o septos transversales que dividen el filamento en células. Los dermatofitos y Aspergillus tienen hifas septadas. Contrasta con las hifas cenocíticas de Mucorales (aseptadas).', category: 'morfologia' },
  // T
  { term: 'Tinea capitis', definition: 'Dermatofitosis del cuero cabelludo. Propia de la infancia. Formas: no inflamatoria (endothrix o ectothrix) e inflamatoria (querion). Principales agentes: T. tonsurans, M. canis.', category: 'dermatofitos' },
  { term: 'Tinea pedis', definition: 'Dermatofitosis del pie ("pie de atleta"). La más frecuente en adultos. Tres formas: interdigital (la más común), vesiculosa e hiperqueratósica. Agente más frecuente: T. rubrum.', category: 'dermatofitos' },
  { term: 'Tinea unguium', definition: 'Ver Onicomicosis. Dermatofitosis de las uñas, la de mayor dificultad diagnóstica y terapéutica.', category: 'dermatofitos' },
  // U
  { term: 'Uniseriado', definition: 'Tipo de cabeza aspergilar en que las fiálides se disponen directamente sobre la vesícula, en una sola capa. Presente en A. fumigatus. Contraste con biseriado (dos capas: métulas + fiálides).', category: 'aspergillus' },
  { term: 'Ureasa', definition: 'Enzima que degrada la urea liberando amoniaco y CO₂. Clave en micología: T. mentagrophytes (+), T. rubrum (−). También positiva en Cryptococcus neoformans.', category: 'tecnicas' },
  // V
  { term: 'Vaginitis candidiásica', definition: 'Principal causa de vaginitis infecciosa. Prurito intenso, secreción vaginal blanquecina, placas blanquecinas y eritema vulvar. Factores de riesgo: diabetes, antibióticos, embarazo, corticoides, anticonceptivos.', category: 'candidiasis' },
  { term: 'Vesícula (Aspergillus)', definition: 'Dilatación esférica en el extremo del conidióforo de Aspergillus. Sobre ella se disponen las fiálides. El tamaño, forma y ángulo de cobertura son clave para identificar la especie.', category: 'aspergillus' },
  { term: 'Voriconazol', definition: 'Azol de segunda generación, antifúngico de elección en aspergilosis invasiva. Mayor espectro que fluconazol. Activo frente a Aspergillus y muchas especies de Candida resistentes a fluconazol.', category: 'farmacologia' },
  // Z
  { term: 'Zigomicosis (Mucormicosis)', definition: 'Infección por hongos del orden Mucorales (Rhizopus, Mucor). Hifas aseptadas (cenocíticas). Infección oportunista grave, angioinvasiva. Ocurre en neutropénicos, diabéticos con cetoacidosis.', category: 'morfologia' },
  { term: 'Zoofílico', definition: 'Tipo ecológico de dermatofito cuyo reservorio principal son los animales. Produce inflamación intensa al infectar humanos. Ejemplos: M. canis (gatos/perros), T. verrucosum (bovino), T. equinum (caballos).', category: 'dermatofitos' },
];

export const categoryConfig: Record<GlossaryCategory, { label: string; color: string; icon: string }> = {
  morfologia:   { label: 'Morfología fúngica',          color: '#4a7c59', icon: '🔬' },
  diagnostico:  { label: 'Diagnóstico y técnicas',      color: '#2563eb', icon: '🧫' },
  candidiasis:  { label: 'Candidiasis',                  color: '#c9a227', icon: '🦠' },
  dermatofitos: { label: 'Dermatofitos',                 color: '#8b2fc9', icon: '🦶' },
  aspergillus:  { label: 'Aspergillus',                  color: '#d97706', icon: '💨' },
  farmacologia: { label: 'Farmacología antifúngica',     color: '#c94040', icon: '💊' },
  tecnicas:     { label: 'Técnicas de laboratorio',      color: '#0891b2', icon: '⚗️' },
  api20c:       { label: 'API 20 C AUX',                 color: '#64748b', icon: '🔭' },
};
