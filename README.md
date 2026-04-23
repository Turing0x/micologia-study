# 🍄 Micología Clínica — Guía de Estudio Interactiva

> Proyecto Astro creado con ❤️ para repasar el temario de Micología Clínica antes del examen.

---

## 📋 Índice

1. [Planificación del Proyecto Web](#-planificación-del-proyecto-web)
2. [Estructura de Archivos](#-estructura-de-archivos)
3. [Comandos](#-comandos)
4. [GUÍA DE ESTUDIO COMPLETA](#-guía-de-estudio-completa)
   - [Tema 1 — Generalidades de Micología Clínica](#tema-1--generalidades-de-micología-clínica)
   - [Tema 2 — Candidiasis](#tema-2--candidiasis)
   - [Tema 3 — Dermatofitosis](#tema-3--dermatofitosis)
   - [Tema 4 — Aspergilosis](#tema-4--aspergilosis)
   - [Tema 5 — API 20 C AUX (Identificación de Levaduras)](#tema-5--api-20-c-aux-identificación-de-levaduras)
5. [Resumen Rápido — Tablas Clave](#-resumen-rápido--tablas-clave)
6. [Preguntas de Autoevaluación](#-preguntas-de-autoevaluación)
7. [Glosario de Términos](#-glosario-de-términos)

---

## 🚀 Planificación del Proyecto Web

### Objetivo

Construir una **web de estudio interactiva** con Astro que permita repasar el contenido de micología clínica de forma estructurada, visual y entretenida. El sitio incluirá resúmenes, fichas, cuestionarios y tablas comparativas.

### Stack Tecnológico

- **Framework:** Astro 6.x
- **Estilos:** CSS personalizado (sin frameworks externos, para mantenerlo ligero)
- **Interactividad:** Astro Islands con componentes nativos (vanilla JS) para los quizzes
- **Despliegue:** Vercel o Netlify (deploy estático, gratis)
- **Node:** ≥ 22.12.0

### Páginas a Desarrollar

| Ruta | Página | Descripción |
|------|--------|-------------|
| `/` | Inicio | Portada con los 4 temas y acceso rápido |
| `/generalidades` | Generalidades | Morfología, diagnóstico, técnicas generales |
| `/candidiasis` | Candidiasis | Género Candida, formas clínicas, diagnóstico |
| `/dermatofitosis` | Dermatofitosis & Aspergillus | Tiñas, géneros, diagnóstico, Aspergillus invasivo |
| `/api20c` | API 20 C AUX | Sistema de identificación de levaduras bioMérieux |
| `/quiz` | Autoevaluación | Preguntas tipo test sobre todos los temas |

### Componentes a Crear

```
src/
├── components/
│   ├── TopicCard.astro         # Tarjeta de tema en la portada
│   ├── SectionHeader.astro     # Cabecera de sección con icono
│   ├── InfoBox.astro           # Caja resaltada (importante, atención, tip)
│   ├── ComparisonTable.astro   # Tabla comparativa (géneros, especies...)
│   ├── FlashCard.astro         # Tarjeta anverso/reverso para repasar
│   ├── QuizQuestion.astro      # Pregunta de test con feedback
│   └── ProgressBar.astro       # Barra de progreso del quiz
├── layouts/
│   └── Layout.astro            # Layout base con nav y estilos globales
└── pages/
    ├── index.astro
    ├── generalidades.astro
    ├── candidiasis.astro
    ├── dermatofitosis.astro
    ├── api20c.astro
    └── quiz.astro
```

### Paleta de Colores

| Variable | Color | Uso |
|----------|-------|-----|
| `--primary` | `#4a7c59` | Verde musgo — hongos filamentosos |
| `--secondary` | `#c9a227` | Ámbar — levaduras |
| `--accent` | `#8b2fc9` | Púrpura — dermatofitos |
| `--danger` | `#c94040` | Rojo — atención / resistencias |
| `--bg` | `#faf9f6` | Fondo crema cálido |
| `--text` | `#2c2c2c` | Texto principal |

### Fases de Desarrollo

**Fase 1 — Estructura base**
- [ ] Crear Layout.astro con navegación entre páginas
- [ ] Configurar variables CSS globales (colores, tipografía)
- [ ] Crear página de inicio con acceso a los 4 temas

**Fase 2 — Contenido por temas**
- [ ] Página Generalidades con morfología y pasos diagnósticos
- [ ] Página Candidiasis con formas clínicas y diagnóstico
- [ ] Página Dermatofitosis con clasificación, géneros y Aspergillus
- [ ] Página API 20 C AUX con procedimiento paso a paso

**Fase 3 — Interactividad**
- [ ] Componente FlashCard con flip animado
- [ ] Componente QuizQuestion con respuesta correcta/incorrecta
- [ ] Página Quiz con 20 preguntas mezcladas de todos los temas
- [ ] Barra de progreso y resultado final

**Fase 4 — Pulido**
- [ ] Responsive design (móvil primero)
- [ ] Modo oscuro opcional
- [ ] Animaciones suaves de entrada
- [ ] Deploy a Vercel/Netlify

---

## 📁 Estructura de Archivos

```
micologia-study/
├── public/
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Welcome.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── study_guide/             ← PDFs fuente del temario
│   ├── Micología_Clínica_Generalidades.pdf
│   ├── 2.1.Candidiasis.pdf
│   ├── 3. Dermatofitosis y aspergillus.pdf
│   └── om_biomerieux_test-kits_package_insert-20210.pdf
├── astro.config.mjs
├── package.json
└── README.md
```

---

## 🧞 Comandos

| Comando | Acción |
|---------|--------|
| `pnpm install` | Instala dependencias |
| `pnpm dev` | Servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Build de producción en `./dist/` |
| `pnpm preview` | Previsualiza el build antes de desplegar |

---

---

# 📚 GUÍA DE ESTUDIO COMPLETA

---

## Tema 1 — Generalidades de Micología Clínica

### 1.1 Morfología de los Hongos

Los hongos se dividen en dos grandes grupos morfológicos:

| Tipo | Características | Ejemplos |
|------|----------------|----------|
| **Levaduras** (unicelulares) | Forma redondeada u oval. Reproducción por gemación (blastoconidios). Algunas forman pseudohifas o hifas verdaderas. Colonias cremosas. | *Candida*, *Cryptococcus* |
| **Hongos filamentosos / Mohos** (pluricelulares) | Forman hifas y micelio. Se reproducen por conidias. | *Aspergillus*, *Dermatofitos* |

> **⚠️ Clave de examen:** Algunas especies son **dimórficas** (levadura a 37°C, moho a 25°C), como *Histoplasma* y *Sporothrix*.

---

### 1.2 Diagnóstico Microbiológico — Pasos Generales

El diagnóstico microbiológico de una micosis sigue siempre estos 6 pasos:

**1. Muestras de calidad**

La toma de muestra debe ser adecuada al foco de infección:

| Infección | Muestra |
|-----------|---------|
| Mucositis candidósica (oral/vaginal) | Escobillón con medio de transporte |
| Lesiones por dermatofitos (piel/uñas) | Raspado de piel/uñas, arrancar cabello con pinzas |
| Tiña inflamatoria supurativa (querion) | Pus con jeringa o escobillón |
| Pitiriasis versicolor | Cinta adhesiva sobre la lesión |
| Lesiones subcutáneas | Biopsia |
| Infecciones respiratorias | BAL (lavado broncoalveolar) |
| Infecciones sistémicas | Muestra apropiada al lugar |

**2. Examen directo microscópico**

- Bajo coste, alta sensibilidad.
- Tinciones utilizadas:
  - **KOH 10–30%** (mejor con tinta Parker): digiere tejido, deja visibles los hongos.
  - **Blanco de calcoflúor** (fluorescencia): tiñe quitina de la pared fúngica.
  - **Tinción de Gram**: blastoconidios grampositivos.
  - **Azul de metileno**: útil en esputo.

**3. Cultivo — Medios y condiciones**

- **Sabouraud dextrose agar (SDA)**: medio universal para hongos.
- **Sabouraud con antibióticos** (cloranfenicol, gentamicina): inhibe bacterias.
- **Mycobiotic agar**: con cicloheximida, selectivo para dermatofitos.
- **Agar sangre / chocolate**: para hemocultivos.

| Microorganismo | Temperatura incubación | Tiempo |
|----------------|----------------------|--------|
| Candida | 35–37°C | 24–48 h |
| Dermatofitos | 30°C | Hasta 4 semanas |
| Aspergillus | 25–30°C | 2–6 semanas |

**4. Identificación**

- **Macroscópica:** color, textura, velocidad de crecimiento, reverso de la colonia.
- **Microscópica:** tipo de conidias (macro/micro), hifas, estructuras reproductoras.
- **Pruebas metabólicas:** ureasa, asimilación de carbohidratos (API 20 C AUX).

**5. Diagnóstico serológico**

- Detección de antígenos: Ag de *Cryptococcus*, Galactomanano (*Aspergillus*), β-D-Glucano.
- Detección de anticuerpos (menos útil en inmunodeprimidos).

**6. Diagnóstico molecular**

- PCR: alta sensibilidad y especificidad.
- Util especialmente en muestras de BAL y sangre.

---

### 1.3 Clasificación Clínica de las Micosis

| Tipo | Localización | Patógenos |
|------|-------------|-----------|
| **Superficial** | Capa córnea, cabello, uñas, mucosas | *Malassezia*, *Trichophyton*, *Candida* |
| **Subcutánea** | Dermis, tejido subcutáneo, músculo | *Sporothrix*, *Fonsecaea*, *Madurella* |
| **Sistémica o profunda** | Uno o más órganos profundos | *Histoplasma*, *Coccidioides*, *Paracoccidioides* |
| **Oportunista** | Variable — depende de inmunosupresión | *Candida*, *Aspergillus*, *Cryptococcus*, *Rhizopus* |

---

## Tema 2 — Candidiasis

### 2.1 El Género Candida

- **Características generales:**
  - Eucariotas, unicelulares, redondas u ovales.
  - Reproducción por **gemación** (blastoconidios).
  - Algunas forman **pseudohifas** (levaduras alargadas que no se separan tras la gemación).
  - Pueden producir **hifas verdaderas**.
  - Colonias cremosas, hialinas o levemente pigmentadas.
  - Aproximadamente **200 especies**.

- **Especies principales:**

| Especie | Características clave |
|---------|----------------------|
| *C. albicans* | Especie más frecuente. Forma tubo germinativo (prueba diagnóstica clave). Flora normal en mucosas. |
| *C. tropicalis* | Virulencia elevada. |
| *C. glabrata* | Resistencia intrínseca a azoles. Mayor aislamiento en vagina. |
| *C. parapsilosis* | Asociada a catéteres y neonatos. Aislamiento frecuente en piel. |
| *C. krusei* | Resistencia intrínseca a fluconazol. |
| *C. guilliermondii* | Resistencia reducida a azoles. |
| *C. dubliniensis* | Similar a *C. albicans*. Aislamiento frecuente en cavidad oral. |
| *C. lusitaniae* | Resistencia a anfotericina B. |

> **⚠️ Clave de examen:** Las especies con **resistencia intrínseca a azoles** son *C. krusei*, *C. guilliermondii* y *C. glabrata*. Importante para el tratamiento.

---

### 2.2 Epidemiología

- *Candida* es **flora normal** del ser humano (mucosas GI, respiratoria, genitourinaria).
- Son **patógenos oportunistas** que causan infección endógena.
- *C. albicans* se aísla en:
  - Cavidad oral y aparato GI del **60% de personas sanas**.
  - Vagina del **70% de mujeres sanas**.
  - Superficies cutáneas del **20% de personas sanas**.
- Transmisión **interhumana** posible.

---

### 2.3 Formas Clínicas

#### A) Infecciones de Mucosas

**Candidiasis Orofaríngea (Muguet)**
- Placas blanquecinas en lengua y mucosa oral que se **desprenden al rasparlas**.
- Formadas por *Candida*, células epiteliales, leucocitos, bacterias y tejido necrótico.
- Más frecuente en: pacientes con ATB, prótesis dentales, neonatos, inmunodeprimidos.

**Esofagitis Candidiásica**
- Asociada frecuentemente a pacientes hematológicos o con SIDA.
- Síntomas: odinofagia, sensación de obstrucción al deglutir, dolor torácico, náuseas y vómitos.
- Diagnóstico: endoscopia (placas blanquecinas) + biopsia.

**Vaginitis**
- Principal causa de infecciones vaginales.
- Síntomas: prurito + secreción vaginal + placas blanquecinas + eritema.
- Frecuentes recidivas. Posible extensión al periné.
- Factores de riesgo: diabetes, antibióticos, embarazo, corticoides, anticonceptivos.

**Balanitis**
- En hombres cuya pareja presenta vaginitis, en diabéticos o inmunosuprimidos.
- Eritema, micropústulas, erosiones superficiales.

#### B) Síndromes Cutáneos

- **Intertrigo candidiásico:** pliegues cutáneos húmedos.
- **Foliculitis por Candida.**
- **Paroniquia y Onicomicosis:** infección de uñas y pliegues periungueales.
- **Candidiasis perianal.**
- **Candidiasis mucocutánea crónica:** déficit inmune T.

#### C) Candidiasis Invasoras

Engloba enfermedades graves oportunistas: candidemia, endocarditis, meningitis, endoftalmitis y afectación de órganos profundos. **Excluye** las superficiales y orofaríngeas.

**Candidemia:**
- Presencia de *Candida* en torrente sanguíneo.
- Incidencia en aumento: **5–10% de las sepsis nosocomiales**.
- Mortalidad **muy elevada (~40%)**.
- Distribución por especie:
  - *C. albicans*: 50–60%
  - *C. parapsilosis*: 10–20%
  - *C. glabrata*: 10–20%
  - *C. tropicalis*: 6–7%
  - *C. krusei*: 4%

**Factores de riesgo de candidemia:**
- Catéter venoso central ★
- Exposición a antibióticos de amplio espectro
- Nutrición parenteral
- Cirugía previa (GI o torácica)
- Neutropenia
- Quemados
- Adictos a drogas vía parenteral
- Trasplantados con inmunosupresores
- Neonatos de bajo peso

**Candidiasis profunda localizada:** osteomuscular, pulmón, riñón, SNC, ocular...

**Candidiasis diseminada / sistémica:** múltiple localización visceral.

---

### 2.4 Diagnóstico Microbiológico de Candidiasis

**Muestras**
- Representativas del foco, tomadas en condiciones de asepsia.
- Preferible aspiración con jeringa o biopsia (no hisopos).
- Transporte < 2 h. Si > 2 h: LCR y hemocultivos a temperatura ambiente; resto refrigeradas a 4°C.

| Tipo infección | Muestra |
|----------------|---------|
| Superficial | Escobillón (x2) en medio de transporte |
| Candidiasis profunda — sangre | 2 hemocultivos de 10–20 ml (1,5 ml niños). Baja sensibilidad (~50%) |
| Candidiasis pulmonar | BAL (VPP >80% en inmunosuprimidos) |
| Otras | Esputo inducido, aspirado, LCR, biopsia |

**Examen directo — Tinciones:**
- Gram, Blanco de calcoflúor, KOH 10–30%.
- Baja sensibilidad (resultado negativo no descarta infección).
- Se observan **blastoconidias** ± pseudohifas.

**Cultivo:**
- Muestras cutáneas/mucosas: Sabouraud con y sin antibióticos.
- Hemocultivos: pase a AS, Ach, Sabouraud cuando se detecta crecimiento.
- BAL/esputos: Sabouraud, Mycobiotic + medios bacteriológicos.
- Temperatura: **35–37°C**, 24–48 h.

**Identificación:**
- Colonias lisas, brillantes, blancas en Sabouraud.
- **Prueba del tubo germinativo** (solo *C. albicans* y *C. dubliniensis*): incubar en suero a 37°C 2–3h → formación de tubo germinativo.
- Pruebas de asimilación de carbohidratos: API 20 C AUX.
- Identificación molecular (MALDI-TOF, PCR).

> **⚠️ IMPORTANTE:** Identificar *a nivel de especie* es crucial por las resistencias. *C. krusei*, *C. guilliermondii* y *C. glabrata* son resistentes a azoles.

**Otros métodos diagnósticos:**
- **β-D-Glucano** en sangre: marcador inespecífico de IFI.
- **Galactomanano:** específico de *Aspergillus*, no útil para *Candida*.
- Diagnóstico serológico: detección de Ag de *Cryptococcus* (no *Candida*).

---

## Tema 3 — Dermatofitosis

### 3.1 Qué son los Dermatofitos

- Hongos que infectan la **capa córnea de pelo, piel y uñas** (micosis superficial).
- Tres géneros:
  - ***Trichophyton*** (causa el 80–90% de todas las tiñas)
  - ***Microsporum***
  - ***Epidermophyton***

**Especies más frecuentes:**
- *T. rubrum* — el más frecuente en general
- *T. mentagrophytes*
- *T. tonsurans* — tiña capitis infantil
- *M. canis* — de origen animal (gatos, perros)
- *E. floccosum*

---

### 3.2 Ecología — Clasificación por Reservorio

| Tipo | Reservorio | Ejemplos |
|------|-----------|----------|
| **Geofílicas** | Suelo | *M. gypseum* |
| **Zoofílicas** | Animales | *M. canis*, *T. verrucosum*, *T. equinum*, *T. gallinae* |
| **Antropofílicas** | Humanos | *T. rubrum*, *T. interdigitale*, *E. floccosum*, *T. violaceum* |

---

### 3.3 Transmisión

| Tipo | Fuentes |
|------|---------|
| **Directa** | Animales, humanos, suelo |
| **Indirecta (fomites)** | Peines, cepillos, gorros, toallas, ropa, pisos de vestuarios, respaldos de asientos |

---

### 3.4 Factores Predisponentes

- **Edad:** Tiña capitis → infancia. Intertrigo, tiña ungueal → adultos.
- **Profesión:** Contacto con animales, maceración de pies, humedad.
- **Iatrogenia:** Corticoides tópicos o sistémicos.
- **Enfermedades:** Síndrome de Cushing, linfomas, alteraciones en metabolismo de hidratos de carbono, inmunodeficiencia celular.

---

### 3.5 Formas Clínicas (clasificación topográfica)

| Forma | Localización | Características |
|-------|-------------|----------------|
| **Tinea capitis** | Cuero cabelludo | Exclusiva de la infancia. Forma no inflamatoria e inflamatoria (querion). |
| **Tinea corporis** | Piel lampiña del cuerpo | Lesión anular con borde activo. Incluye *tinea faciei*. |
| **Tinea cruris** | Ingle | Más frecuente en varones. Placa eritematosa en región inguinal. |
| **Tinea manuum** | Mano | Hiperqueratosis palmar. |
| **Tinea pedis** | Pie ("pie de atleta") | Formas: vesiculosa, hiperqueratósica, interdigital. |
| **Tinea unguium** (onicomicosis) | Uñas | Subungueal distal, subungueal proximal, distrofia total. **Mayor dificultad diagnóstica y de tratamiento.** |
| **Tinea barbae** | Barba | Placa descamante o lesión granulomatosa cutánea. |

---

### 3.6 Diagnóstico de Laboratorio (Dermatofitosis)

**1. Toma de muestra:**
- Preguntar si el paciente recibe antifúngico → suspender al menos **5 días** antes.
- Desinfectar zona con alcohol 70%.
- Tomar cantidad suficiente para examen directo y cultivo.

**2. Examen directo:**
- **KOH 20%** (mejor con tinta Parker).
- Visualización de filamentos septados y ramificados.
- Ventajas:
  - Bajo coste y alta sensibilidad.
  - Permite diferenciar dermatofitos de levaduras.
  - Mayor sensibilidad en onicomicosis que el cultivo.
  - Criterio diagnóstico de infección fúngica en uñas por no dermatofitos o levaduras.

**3. Cultivo e identificación:**
- Medio: **Sabouraud** (con o sin cicloheximida).
- Temperatura: **30°C** durante **4 semanas**.
- Otros medios: agar patata dextrosa, lactrimel, agar avena (favorecen esporulación).
- Identificación por:
  - Caracteres macroscópicos (color, forma, velocidad de crecimiento, reverso).
  - Macro y microconidias, clamidosporas, hifas.
  - Prueba de la **ureasa** (*T. mentagrophytes* positivo, *T. rubrum* negativo).
  - Test de perforación del pelo (*T. rubrum* positivo).

---

### 3.7 Diferenciación de Géneros de Dermatofitos

| Carácter | *Epidermophyton* | *Trichophyton* | *Microsporum* |
|----------|-----------------|---------------|--------------|
| **Microconidias** | Ausentes | Numerosas, aisladas o en racimos | Pocas, forma de lágrima |
| **Macroconidias** | 2–4 células, pared lisa, aisladas o en racimos de 2–3, conidióforos cortos | Forma de lápiz/fusiforme, 3–8 células, pared delgada y lisa | 3–6 células, forma de barril a fusiforme, pared **rugosa y gruesa** |

---

### 3.8 Especies Importantes de Dermatofitos — Fichas

**Epidermophyton floccosum**
- Antropofílico.
- Colonia de crecimiento rápido, plana, vellosa, aspecto estrellado. Centro plegado, color caqui-verdoso a marrón. Periferia amarilla. Reverso marrón-amarillento.
- Macroconidias abundantes, grandes, multicelulares, forma palo de golf, pared lisa, en racimos.
- Microconidias: ausentes.

**Trichophyton mentagrophytes**
- Variante *interdigitalis*: antropofílico. Variante *mentagrophytes*: zoofílico.
- Colonia de crecimiento rápido. Centro granuloso canela (v. mentagrophytes) o velloso blanco (v. interdigitalis). Borde velloso blanco.
- Macroconidias: raras, cilíndricas, pared lisa, extremo redondeado, multitabicadas.
- Microconidias: muy abundantes, redondas/lágrima.
- Estructuras especiales: **hifas en espiral**.
- Ureasa: **positivo**.

**Trichophyton rubrum**
- Antropofílico. El más frecuente.
- Colonia de crecimiento moderado, vellosa, blanca con **halo rojizo**. Reverso rojo intenso (característica clave).
- Macroconidias: raras, en extremos de hifas, pared lisa, extremo redondeado, **forma de lápiz**.
- Microconidias: abundantes, en lágrima, alternas en las hifas.
- Ureasa: **negativo** (diferencia de *T. mentagrophytes*).

**Microsporum canis**
- Zoofílico.
- Colonia granulosa o vellosa, borde plumoso, blanca a color cuero, con coloración amarillo-anaranjado en periferia.
- Macroconidias: pared gruesa y rugosa, fusiformes, multitabicadas, **punta curvada**.
- Microconidias: raras.

---

## Tema 4 — Aspergilosis

### 4.1 Epidemiología y Contexto

- *Aspergillus* es la principal causa de **infección fúngica invasora (IFI)** en pacientes hematológicos sometidos a trasplante de progenitores hematopoyéticos (HSCT).
- Entre el **8–15%** de los pacientes con HSCT presentarán una IFI.
- Distribución de IFI en HSCT:
  - *Aspergillus*: **45–70%** del total
  - *Candida*: 7–20%
  - Zigomicetos y otros: 1–8%
- Dentro de *Aspergillus*:
  - *A. fumigatus*: **90%** de los casos
  - *A. niger*, *A. terreus*, *A. flavus*: minoritarios

---

### 4.2 Diagnóstico Microbiológico de Aspergilosis

#### Técnicas Convencionales

**Observación microscópica:**
- Visualización de estructuras fúngicas en la muestra (cabeza aspergilar: conidióforo, vesícula, fiálides, cadenas de fialoconidias).

**Cultivo — Gold Standard:**
- Permite identificación convencional, estudios de sensibilidad, identificación molecular y epidemiología.
- **Inconvenientes:**
  - Baja sensibilidad: BAL/esputo 20–60%; hemocultivos casi siempre negativos.
  - En localización no estéril, no diferencia colonización de invasión.
  - Muestras estériles son problemáticas de obtener.
- Sensibilidad en tejido histopatológico positivo: ~30–52%.

**Medios y condiciones de cultivo:**

| Aislamiento | Identificación |
|-------------|---------------|
| Sabouraud + antibióticos | Malt-extract agar |
| Agar sangre | Corn-meal agar |
| Agar chocolate | Agar Czapek |

- Temperatura: **25–30°C**
- Atmósfera: aeróbica
- Duración: **2–6 semanas**

#### Técnicas Alternativas (Marcadores)

- **Galactomanano** (GM): Ag de pared de *Aspergillus* en sangre/BAL. Marcador específico, útil en pacientes hematológicos.
- **β-D-Glucano:** marcador inespecífico de IFI (positivo también en *Candida*, *Pneumocystis*).
- **PCR:** alta sensibilidad pero difícil estandarización.

---

### 4.3 Especies de Aspergillus — Identificación

**Estructura común:**
- **Cabeza aspergilar** = conidióforo + vesícula + fiálides (una o dos series) + cadenas de fialoconidias.
- Uniseriado (fiálides directamente sobre vesícula) vs. Biseriado (fiálides sobre métulas sobre vesícula).
- Ángulo de disposición de fiálides: 180° (*A. fumigatus*) vs. 360° (*A. flavus*, *A. niger*, *A. terreus*).

| Especie | Colonia | Microscopía clave |
|---------|---------|------------------|
| ***A. fumigatus*** | Crecimiento rápido, plana, aterciopelada. Comienza verde con halo blanco → grisácea oscura | Vesículas subclávicas, fiálides en **180°**, micelio hialino septado |
| ***A. flavus*** | Textura aterciopelada/afelpada/vellosa. Color inicialmente blanco → **verde azulado** (~7 días). Margen blanquecino | Conidióforo corto, liso. Conidios en cadenas, columna compacta **360°**, 1 o 2 series de fiálides. Conidios verdes, finamente rugosos, globosos |
| ***A. niger*** | Crecimiento rápido. Color blanco-amarillento con abundantes **puntos negros**. Maduran en 3 días | Cabezas aspergilares subesféricas, dos series de fiálides, **360°**, conidios redondos **negros** |
| ***A. terreus*** | Crecimiento rápido (maduran al 3.º día), color **café o canela**, granulares o pulverulentas | Cabezas aspergilares biseriadas, **360°**, conidias esféricas, hialinas, libres abundantes |

---

## Tema 5 — API 20 C AUX (Identificación de Levaduras)

### 5.1 Qué es el API 20 C AUX

Sistema de **bioMérieux** para la identificación precisa de levaduras, especialmente las de interés clínico.

- **Principio:** 19 pruebas de **asimilación de carbohidratos** + 1 control de crecimiento (sin fuente de carbono).
- Las levaduras solo crecen si son capaces de utilizar cada sustrato como **única fuente de carbono**.
- Lectura: comparar turbidez con el control de crecimiento (cupula 0).
- Identificación: Analytical Profile Index (apiweb™ o ATB™).

---

### 5.2 Contenido del Kit (25 tests)

- 25 strips API 20 C AUX
- 25 cajas de incubación
- 25 ampollas de API C Medium
- 25 hojas de resultados
- 1 prospecto

**Composición del medio (API C Medium):**
- Sulfato amónico, fosfatos, NaCl, CaCl₂, MgSO₄, aminoácidos (histidina, triptófano, metionina), vitaminas, elementos traza, agente gelificante. pH final: 6.4–6.8.
- No requiere calentamiento previo. Dejarlo atemperar antes de usar. **No agitar.**

---

### 5.3 Lista de las 20 Pruebas

| Nº | Cód. | Sustrato |
|----|------|----------|
| 0 | — | Control (sin carbono) |
| 1 | GLU | D-Glucosa |
| 2 | GLY | Glicerol |
| 3 | 2KG | 2-Cetogluconato cálcico |
| 4 | ARA | L-Arabinosa |
| 5 | XYL | D-Xilosa |
| 6 | ADO | Adonitol |
| 7 | XLT | Xilitol |
| 8 | GAL | D-Galactosa |
| 9 | INO | Inositol |
| 10 | SOR | D-Sorbitol |
| 11 | MDG | Metil-α-D-glucopiranósido |
| 12 | NAG | N-Acetilglucosamina |
| 13 | CEL | D-Celobiosa |
| 14 | LAC | D-Lactosa (origen bovino) |
| 15 | MAL | D-Maltosa |
| 16 | SAC | D-Sacarosa |
| 17 | TRE | D-Trehalosa |
| 18 | MLZ | D-Melezitosa |
| 19 | RAF | D-Rafinosa |

---

### 5.4 Procedimiento Paso a Paso

1. **Preparar la cepa:** cultivo puro en Sabouraud 24–48 h.
2. **Preparar la suspensión:** en API Suspension Medium o NaCl 0,85%. Turbidez = **McFarland n.º 2**.
3. **Inocular:** pipetear la suspensión con API C Medium en cada cupula.
4. **Incubar:** temperatura indicada (generalmente 30°C o 37°C según especie).
5. **Leer:** comparar cada cupula con el control (cupula 0). Crecimiento (+) si turbidez ≥ control.
6. **Identificar:** con el Analytical Profile Index o apiweb™.

---

### 5.5 Advertencias Importantes

- **Uso diagnóstico in vitro exclusivamente.**
- Solo personal cualificado.
- Contiene productos de origen animal: tratar como potencialmente infeccioso.
- Todas las muestras y cultivos de levaduras deben considerarse infecciosos (técnica aséptica obligatoria).

---

## 📊 Resumen Rápido — Tablas Clave

### Resistencias a Antifúngicos de Candida spp.

| Especie | Fluconazol | Otras |
|---------|-----------|-------|
| *C. albicans* | Sensible | — |
| *C. tropicalis* | Sensible | — |
| *C. glabrata* | Resistencia reducida / R | — |
| *C. krusei* | **Resistente (intrínseco)** | — |
| *C. guilliermondii* | Resistencia reducida | — |
| *C. lusitaniae* | Sensible | R a Anfotericina B |
| *C. parapsilosis* | Sensible | — |

---

### Medios de Cultivo — Resumen

| Medio | Uso principal | Temperatura |
|-------|--------------|-------------|
| Sabouraud dextrose agar | Universal para hongos | 25–37°C |
| Sabouraud + antibióticos | Muestras contaminadas | 25–37°C |
| Mycobiotic (cicloheximida) | Dermatofitos selectivo | 30°C |
| Agar patata dextrosa / lactrimel | Esporulación dermatofitos | 30°C |
| Agar Czapek / Malt-extract | Identificación Aspergillus | 25–30°C |

---

### Diferencias *T. rubrum* vs *T. mentagrophytes*

| Carácter | *T. rubrum* | *T. mentagrophytes* |
|----------|------------|---------------------|
| Ureasa | **Negativo** | **Positivo** |
| Colonia (reverso) | **Rojo intenso** | Marrón-amarillo |
| Macroconidias | Forma de lápiz, raras | Cilíndricas, raras |
| Microconidias | En lágrima, alternas | Abundantes, redondas |
| Estructuras especiales | — | Hifas en espiral |
| Ecología | Antropofílico | Antrop. (v. interdigitalis) / Zoofílico (v. mentagrophytes) |

---

### Aspergillus — Diferenciación Rápida

| | *A. fumigatus* | *A. flavus* | *A. niger* | *A. terreus* |
|--|---------------|------------|-----------|-------------|
| **Color colonia** | Verde → grisáceo | Verde azulado | Negro (puntos) | Canela/café |
| **Fiálides** | 180° | 360°, 1–2 series | 360°, 2 series | 360°, biseriadas |
| **Conidios** | Verdes | Verdes rugosos | **Negros** | Hialinos, esféricos |
| **Frecuencia IFI** | 90% | Minoritario | Minoritario | Minoritario |

---

## ❓ Preguntas de Autoevaluación

Intenta responder sin mirar. Las respuestas están debajo de cada bloque.

---

**BLOQUE 1 — Generalidades**

1. ¿Cuáles son los 6 pasos del diagnóstico microbiológico de las micosis?
2. ¿Qué tinción se usa en el examen directo de dermatofitos y cuál su concentración óptima?
3. ¿Qué temperatura y tiempo se usa para cultivar dermatofitos vs. Candida?
4. ¿Qué diferencia hay entre micosis superficial, subcutánea, sistémica y oportunista?

<details>
<summary>Ver respuestas</summary>

1. Muestra de calidad → Examen directo → Cultivo → Identificación (macro/micro + metabólica) → Serología → Molecular.
2. KOH 20% (mejor con tinta Parker añadida). Permite ver filamentos septados y ramificados.
3. Dermatofitos: 30°C, hasta 4 semanas. Candida: 35–37°C, 24–48 h.
4. Superficial = capa córnea/uñas/mucosas. Subcutánea = dermis/tejido subcutáneo. Sistémica = órganos profundos. Oportunista = hongos inócuos que infectan en inmunosuprimidos (pueden ser en cualquier localización).

</details>

---

**BLOQUE 2 — Candidiasis**

5. ¿Qué prueba distingue *C. albicans* de la mayoría de *Candida* no albicans?
6. ¿Cuáles son las tres especies de *Candida* con resistencia a azoles? (las "tres amigas problemáticas")
7. ¿Cuál es la mortalidad de la candidiasis invasora?
8. ¿Qué muestra se usa para hemocultivos en sospecha de candidemia y cuál es su sensibilidad?
9. ¿Cuáles son los factores de riesgo principales de candidemia? (nombra 5)

<details>
<summary>Ver respuestas</summary>

5. Prueba del **tubo germinativo**: *C. albicans* (y *C. dubliniensis*) lo forman al incubar en suero a 37°C 2–3 h.
6. *C. krusei* (intrínseca), *C. guilliermondii* (reducida) y *C. glabrata* (reducida/R).
7. ~**40%**.
8. 2 hemocultivos de 10–20 ml. Sensibilidad: solo ~**50%** (baja).
9. Catéter venoso central, antibióticos de amplio espectro, nutrición parenteral, cirugía GI/torácica, neutropenia, neonatos de bajo peso, quemados, trasplantados, adictos a drogas IV.

</details>

---

**BLOQUE 3 — Dermatofitosis**

10. ¿Qué género de dermatofito NO produce microconidias?
11. ¿Cuál es la diferencia entre una especie zoofílica y una antropofílica? Da un ejemplo de cada una.
12. ¿Cómo se diferencia *T. rubrum* de *T. mentagrophytes* en el laboratorio?
13. ¿Qué forma clínica de tiña presenta mayor dificultad diagnóstica y de tratamiento?
14. ¿Cómo son las macroconidias de *Microsporum* vs. *Trichophyton*?

<details>
<summary>Ver respuestas</summary>

10. ***Epidermophyton*** (solo produce macroconidias).
11. Zoofílica: reservorio en animales (ej. *M. canis* → gatos/perros). Antropofílica: reservorio en humanos (ej. *T. rubrum*).
12. Ureasa: *T. mentagrophytes* (+), *T. rubrum* (-). Reverso colonia: *T. rubrum* rojo intenso. Microconidias: *T. mentagrophytes* muy abundantes y redondas; *T. rubrum* en lágrima alternas.
13. **Tinea unguium** (onicomicosis).
14. *Microsporum*: pared rugosa y gruesa, forma barril a fusiforme, 3–6 células. *Trichophyton*: pared delgada y lisa, forma lápiz/fusiforme, 3–8 células.

</details>

---

**BLOQUE 4 — Aspergillus**

15. ¿Qué porcentaje de las IFI en pacientes HSCT corresponde a *Aspergillus* y qué especie predomina?
16. ¿Por qué el cultivo tiene baja sensibilidad en aspergilosis invasiva?
17. ¿Cómo se diferencia *A. fumigatus* de *A. niger* macroscópicamente?
18. ¿Qué marcador sérico es específico de aspergilosis invasiva?
19. ¿Cuál es el ángulo de disposición de fiálides en *A. fumigatus* vs. *A. flavus*?

<details>
<summary>Ver respuestas</summary>

15. 45–70% de las IFI. Predomina ***A. fumigatus*** (90% de los casos de aspergilosis).
16. BAL/esputo: 20–60% sensibilidad; hemocultivos casi siempre negativos. En localización no estéril no diferencia colonización de invasión. Muestras estériles son difíciles de obtener.
17. *A. fumigatus*: colonia verde→grisácea. *A. niger*: colonia blanco-amarillenta con **puntos negros** prominentes, conidios negros.
18. **Galactomanano** (GM) en sangre o BAL.
19. *A. fumigatus*: **180°** (fiálides solo en la mitad superior de la vesícula). *A. flavus*: **360°** (toda la superficie de la vesícula).

</details>

---

**BLOQUE 5 — API 20 C AUX**

20. ¿Cuántas pruebas de asimilación tiene el API 20 C AUX y cuál es la cupula 0?
21. ¿Qué estándar de turbidez se usa para preparar la suspensión de levaduras?
22. ¿Qué fuente de carbono se usa en la cupula GLU y qué sustrato en la cupula RAF?
23. ¿Cómo se lee un resultado positivo en el API 20 C AUX?

<details>
<summary>Ver respuestas</summary>

20. **19 pruebas** de asimilación + 1 control (cupula 0 = sin fuente de carbono). Total 20 cupulas.
21. **McFarland n.º 2**.
22. GLU = D-Glucosa. RAF = D-Rafinosa.
23. La cupula muestra turbidez **igual o mayor** que la cupula 0 (control de crecimiento).

</details>

---

> 💡 **Tip de última hora:** Repasa especialmente las **resistencias de Candida**, la **diferenciación T. rubrum / T. mentagrophytes** (ureasa + reverso de colonia) y la **identificación macroscópica de Aspergillus** (color de colonia + ángulo de fiálides). Son los puntos más preguntados en exámenes de micología clínica.

---

---

# 📖 GLOSARIO DE TÉRMINOS

---

## 🗂️ Planificación de la Página de Glosario

### Objetivo de la página `/glosario`

Ofrecer una **referencia rápida y buscable** de todos los términos técnicos del temario, organizada alfabéticamente y por categorías. Ideal para consultar un término concreto durante el repaso sin tener que leer todo el contenido.

### Funcionalidades de la página

| Funcionalidad | Descripción | Implementación |
|---------------|-------------|---------------|
| **Búsqueda en tiempo real** | Filtrar términos mientras se escribe | Input + JS (`input` event) |
| **Filtro por categoría** | Mostrar solo términos de un tema | Botones de filtro con `data-category` |
| **Vista compacta / expandida** | Alternar entre definición corta y completa | Toggle JS |
| **Índice alfabético** | Saltar a la letra deseada | Anclas `#letra-A`, `#letra-B`... |
| **Resaltado de búsqueda** | Marcar en amarillo el texto buscado | `mark` HTML o `innerHTML` con regex |
| **Modo tarjeta** | Ver término → ocultar definición → revelar | FlashCard reutilizado |

### Componente `GlossaryEntry.astro`

```astro
---
interface Props {
  term: string;
  definition: string;
  category: 'morfologia' | 'diagnostico' | 'candidiasis' | 'dermatofitos' | 'aspergillus' | 'farmacologia' | 'tecnicas';
  related?: string[];   // términos relacionados (links internos)
  mnemonic?: string;    // truco para recordarlo
}
---
```

### Categorías del Glosario

| Categoría | Color | Términos aprox. |
|-----------|-------|----------------|
| 🔬 Morfología fúngica | Verde musgo | 18 |
| 🧫 Diagnóstico y técnicas | Azul pizarra | 22 |
| 🦠 Candidiasis | Ámbar | 24 |
| 🦶 Dermatofitos | Púrpura | 20 |
| 💨 Aspergillus | Naranja quemado | 14 |
| 💊 Farmacología antifúngica | Rojo | 10 |
| 🔭 API 20 C AUX | Gris azulado | 12 |

### Estructura de la ruta `/glosario`

```
src/pages/glosario.astro
src/components/GlossaryEntry.astro
src/components/GlossaryFilter.astro    ← botones de categoría + buscador
src/data/glossary.ts                   ← array con todos los términos
```

---

## A

**Ag (Antígeno)**
Molécula reconocible por el sistema inmune usada en técnicas diagnósticas. En micología, se detecta el Ag de *Cryptococcus* (látex) y el Ag Galactomanano (*Aspergillus*).
`Categoría: Diagnóstico`

**Agar Czapek**
Medio de cultivo selectivo usado para la identificación de *Aspergillus* spp. Favorece la esporulación y la expresión de caracteres morfológicos característicos.
`Categoría: Técnicas`

**Agar patata dextrosa (PDA)**
Medio de cultivo rico en almidón que favorece la esporulación de dermatofitos. Se usa en la identificación de *Trichophyton*, *Microsporum* y *Epidermophyton*.
`Categoría: Técnicas`

**Agar Sabouraud (SDA)**
Medio de cultivo universal para hongos. Contiene glucosa y peptona. Bajo pH (5,6) inhibe la mayoría de bacterias. Existe en versión con antibióticos (cloranfenicol/gentamicina) para muestras contaminadas.
`Categoría: Técnicas`

**Anfotericina B**
Antifúngico poliénico de amplio espectro. Se une al ergosterol de la membrana fúngica. Resistencia notable en *C. lusitaniae*. Tratamiento de elección en muchas micosis sistémicas graves.
`Categoría: Farmacología`

**Antropofílico**
Tipo ecológico de dermatofito cuyo reservorio principal es el ser humano. Generalmente produce infecciones menos inflamatorias pero más crónicas. Ejemplos: *T. rubrum*, *E. floccosum*, *T. violaceum*.
`Categoría: Dermatofitos`

**API 20 C AUX**
Sistema de identificación de levaduras de bioMérieux basado en 19 pruebas de asimilación de carbohidratos. Permite identificar las especies de *Candida* y otras levaduras clínicamente relevantes.
`Categoría: API 20 C AUX`

**Asimilación**
Capacidad de un microorganismo de utilizar un sustrato como única fuente de carbono para su crecimiento. Principio del sistema API 20 C AUX.
`Categoría: API 20 C AUX`

**Aspergiloma**
Masa de hifas de *Aspergillus* que coloniza cavidades pulmonares preexistentes (cavernas tuberculosas, bullas). No invade tejido. Forma crónica no invasora de aspergilosis.
`Categoría: Aspergillus`

**Aspergilosis Invasiva (AI)**
Infección grave por *Aspergillus* que invade tejidos profundos. Afecta principalmente a pacientes inmunodeprimidos (neutropénicos, HSCT). Mortalidad muy elevada. Principal agente: *A. fumigatus*.
`Categoría: Aspergillus`

**Azoles**
Grupo de antifúngicos que inhiben la síntesis de ergosterol (inhibición del citocromo P450 fúngico CYP51). Incluyen fluconazol, voriconazol, itraconazol, posaconazol. Algunas especies de *Candida* presentan resistencia intrínseca.
`Categoría: Farmacología`

---

## B

**BAL (Lavado Broncoalveolar)**
Técnica de obtención de muestra del tracto respiratorio inferior mediante instilación y aspiración de suero fisiológico en el bronquio. En inmunosuprimidos tiene un VPP >80% para *Candida*. Sensibilidad del 20–60% para *Aspergillus*.
`Categoría: Diagnóstico`

**Balanitis**
Infección de *Candida* en el glande del pene. Se presenta en pareja de mujer con vaginitis candidiásica, en diabéticos o inmunosuprimidos. Eritema, micropústulas y erosiones superficiales.
`Categoría: Candidiasis`

**β-D-Glucano**
Componente de la pared celular de la mayoría de hongos patógenos (excepto *Cryptococcus* y zigomicetos). Marcador sérico inespecífico de infección fúngica invasora (IFI). Positivo en candidiasis, aspergilosis y pneumocistosis.
`Categoría: Diagnóstico`

**Biseriado**
Tipo de cabeza aspergilar en la que los conidios se producen a través de dos capas de células: primero las métulas (sobre la vesícula) y luego las fiálides (sobre las métulas). Presente en *A. niger*, *A. terreus*, *A. flavus*.
`Categoría: Aspergillus`

**Blanco de Calcoflúor**
Tinción fluorescente que se une a la quitina de la pared celular fúngica. Requiere microscopio de fluorescencia. Alta sensibilidad para detectar hongos en muestras directas.
`Categoría: Técnicas`

**Blastoconidio**
Célula fúngica redondeada u oval que se reproduce por gemación. Forma de crecimiento principal de las levaduras como *Candida* spp.
`Categoría: Morfología`

---

## C

**Cabeza Aspergilar**
Estructura reproductora de *Aspergillus* compuesta por: conidióforo + vesícula + fiálides (± métulas) + cadenas de fialoconidias. Es la estructura clave para la identificación microscópica de la especie.
`Categoría: Aspergillus`

**Candidemia**
Presencia de *Candida* spp. en el torrente sanguíneo. Representa el 5–10% de las sepsis nosocomiales. Mortalidad ~40%. Diagnóstico por hemocultivo (sensibilidad ~50%).
`Categoría: Candidiasis`

**Candidiasis diseminada**
Forma grave de candidiasis invasora con afectación simultánea de múltiples vísceras (hígado, bazo, riñón, ojo...). Suele derivar de candidemia no controlada.
`Categoría: Candidiasis`

**Candidiasis invasora**
Término que engloba candidemia, endocarditis, meningitis, endoftalmitis y afectación de órganos profundos por *Candida*. Excluye las formas superficiales y orofaríngeas.
`Categoría: Candidiasis`

**Candidiasis mucocutánea crónica**
Forma persistente y recurrente de candidiasis de piel y mucosas asociada a déficit inmune de linfocitos T. No progresa a forma invasora.
`Categoría: Candidiasis`

**Candidiasis orofaríngea (Muguet)**
Placas blanquecinas en lengua y mucosa oral formadas por pseudomembranas de *Candida*, células epiteliales, leucocitos y tejido necrótico. Se desprenden al rasparlas. Más frecuente en neonatos, inmunodeprimidos y usuarios de antibióticos.
`Categoría: Candidiasis`

**Cicloheximida**
Antibiótico añadido al medio Mycobiotic agar. Inhibe el crecimiento de muchos hongos saprófitos y contaminantes, pero no inhibe a los dermatofitos, lo que hace este medio selectivo para ellos.
`Categoría: Técnicas`

**Clamidospora**
Espora asexual de pared gruesa formada por una hifa. En *Candida albicans*, las clamidosporas terminales son una característica diagnóstica relevante (observadas en agar harina de maíz + Tween 80).
`Categoría: Morfología`

**Conidióforo**
Hifa especializada que porta los conidios. En *Aspergillus*, el conidióforo surge del pie (célula de pie) y termina en la vesícula.
`Categoría: Morfología`

**Conidio (Conidia)**
Espora asexual producida por los hongos filamentosos. En *Aspergillus*, las fialoconidias se producen en cadenas desde las fiálides. En dermatofitos se distinguen macro y microconidias.
`Categoría: Morfología`

**Cromoblastomicosis**
Micosis subcutánea crónica causada por hongos dematiáceos (*Fonsecaea*, *Phialophora*). Produce verrugas o nódulos en la piel. Clasificada como micosis subcutánea.
`Categoría: Morfología`

---

## D

**Dermatofito**
Hongo queratinofílico capaz de invadir la capa córnea de piel, pelo y uñas. Pertenecen a tres géneros: *Trichophyton*, *Microsporum* y *Epidermophyton*. Causan las dermatofitosis o tiñas.
`Categoría: Dermatofitos`

**Dermatofitosis**
Micosis superficial causada por dermatofitos. Se clasifica topográficamente: tinea capitis, corporis, cruris, pedis, unguium, manuum, barbae. Afectan la capa córnea de pelo, piel y uñas.
`Categoría: Dermatofitos`

**Dimorfismo**
Capacidad de ciertos hongos de crecer como levadura (37°C, en tejido) o como moho (25°C, en ambiente). Característica de patógenos sistémicos como *Histoplasma capsulatum*, *Coccidioides immitis*, *Sporothrix schenckii*.
`Categoría: Morfología`

---

## E

**Endocarditis fúngica**
Infección del endocardio (válvulas cardíacas) por hongos. Frecuentemente causada por *Candida* spp. en pacientes con prótesis valvulares, catéteres o usuarios de drogas IV. Forma parte de la candidiasis invasora.
`Categoría: Candidiasis`

**Endoftalmitis**
Infección intraocular grave, generalmente por *Candida* en el contexto de candidemia. Puede causar pérdida de visión. Forma parte de la candidiasis invasora.
`Categoría: Candidiasis`

**Esofagitis candidiásica**
Infección del esófago por *Candida*. Asociada a SIDA y pacientes hematológicos. Síntomas: odinofagia, disfagia, dolor torácico subesternal. Diagnóstico: endoscopia + biopsia.
`Categoría: Candidiasis`

**Esporotricosis**
Micosis subcutánea causada por *Sporothrix schenckii*. Dimórfico. Se adquiere por inoculación traumática (jardineros, agricultores). Produce nódulos linfocutáneos ascendentes.
`Categoría: Morfología`

**Eumicetoma**
Micosis subcutánea causada por hongos verdaderos (ej. *Madurella mycetomatis*). Produce tumefacción con granos y fístulas en pie o mano. Micetoma de etiología fúngica.
`Categoría: Morfología`

**Examen directo**
Primera aproximación diagnóstica en micología. Consiste en observar la muestra clínica al microscopio, generalmente tras tratamiento con KOH, calcoflúor u otras tinciones. Detecta presencia de hongos pero no identifica la especie.
`Categoría: Diagnóstico`

---

## F

**Fiálide**
Célula productora de conidios (fialoconidias) en *Aspergillus* y otros hongos. En *Aspergillus*, las fiálides se disponen sobre la vesícula directamente (uniseriado) o sobre métulas (biseriado). El ángulo de disposición (180° vs 360°) es clave para la identificación de especie.
`Categoría: Aspergillus`

**Fialoconidias**
Conidios producidos por las fiálides. En *Aspergillus*, se liberan en cadenas. El color, tamaño y textura de las fialoconidias es carácter diferencial entre especies (*A. fumigatus*: verdes, *A. niger*: negras).
`Categoría: Aspergillus`

**Flora normal (microbiota)**
Microorganismos que habitan de forma comensal en el ser humano sin causar enfermedad. *Candida albicans* forma parte de la flora normal de mucosas GI, respiratoria y genitourinaria. Se convierte en patógena cuando se altera el equilibrio del huésped.
`Categoría: Candidiasis`

**Fomites**
Objetos inanimados que pueden actuar como vehículo de transmisión de microorganismos. En dermatofitosis: peines, cepillos, toallas, ropa de cama, gorros, suelos de vestuarios. Transmisión indirecta.
`Categoría: Dermatofitos`

**Fluconazol**
Azol de primera generación ampliamente usado en candidiasis. *C. krusei* tiene resistencia intrínseca. *C. glabrata* y *C. guilliermondii* presentan sensibilidad reducida. No activo frente a *Aspergillus*.
`Categoría: Farmacología`

---

## G

**Galactomanano (GM)**
Polisacárido de la pared celular de *Aspergillus* spp. detectable en sangre y BAL de pacientes con aspergilosis invasiva. Marcador serológico específico. No detecta *Candida*. Útil en pacientes hematológicos como cribado rutinario.
`Categoría: Diagnóstico`

**Gemación (brotación)**
Reproducción asexual de las levaduras. Una célula hija (blastoconidio) crece a partir de la célula madre, se separa y queda libre. Cuando no se produce separación, se forman pseudohifas.
`Categoría: Morfología`

**Geofílico**
Tipo ecológico de dermatofito cuyo reservorio es el suelo. Producen inflamación intensa al infectar al humano. Ejemplo principal: *Microsporum gypseum*.
`Categoría: Dermatofitos`

---

## H

**Hemocultivo**
Cultivo de sangre para detectar microorganismos en el torrente sanguíneo. En candidemia, se recomiendan 2 hemocultivos de 10–20 ml. Sensibilidad limitada (~50%) para hongos.
`Categoría: Diagnóstico`

**Hifa**
Filamento tubular que constituye la unidad estructural de los hongos filamentosos. Puede ser septada (con tabiques, ej. *Aspergillus*, dermatofitos) o cenocítica/aseptada (ej. Mucorales). El conjunto de hifas forma el micelio.
`Categoría: Morfología`

**Hifa en espiral**
Hifa que adopta una forma helicoidal. Característica de *Trichophyton mentagrophytes*. Útil en la diferenciación de géneros de dermatofitos.
`Categoría: Dermatofitos`

**Hifas verdaderas**
Filamentos con septación real y paredes propias, frente a las pseudohifas. Algunas especies de *Candida* (*C. albicans*) pueden producir hifas verdaderas además de blastoconidios y pseudohifas.
`Categoría: Morfología`

**Histoplasmosis**
Micosis sistémica causada por *Histoplasma capsulatum*, hongo dimórfico. Se adquiere por inhalación de esporas del suelo. Endémica en el valle del Mississippi y zonas tropicales. Puede diseminarse en inmunodeprimidos.
`Categoría: Morfología`

**HSCT (Trasplante de Progenitores Hematopoyéticos)**
Procedimiento terapéutico para enfermedades hematológicas malignas. El período post-trasplante con neutropenia intensa es el mayor factor de riesgo de IFI por *Aspergillus* (8–15% de los pacientes).
`Categoría: Aspergillus`

---

## I

**IFI (Infección Fúngica Invasora)**
Infección por hongos que compromete tejidos profundos o torrente sanguíneo. Especialmente frecuente y grave en pacientes inmunodeprimidos. Principales agentes: *Aspergillus* (45–70%), *Candida* (7–20%) en pacientes HSCT.
`Categoría: Diagnóstico`

**Inmunodeprimido**
Paciente con alteración del sistema inmune que lo hace susceptible a infecciones oportunistas. Incluye: pacientes con VIH/SIDA, receptores de trasplante, en tratamiento con corticoides o quimioterapia, neutropénicos.
`Categoría: Candidiasis`

**Intertrigo candidósico**
Infección de *Candida* en grandes pliegues cutáneos (inguinal, submamario, interdigital). Favorecida por la humedad y la maceración. Síndrome cutáneo candidiásico.
`Categoría: Candidiasis`

---

## K

**KOH (Hidróxido de Potasio)**
Reactivo usado en el examen directo micológico. Concentraciones del 10–30%. Digiere la queratina y las células del huésped, dejando visibles las estructuras fúngicas (hifas, esporas). Mejor efecto al añadir tinta Parker azul-negra.
`Categoría: Técnicas`

**Querion (Kerion)**
Forma inflamatoria grave de tinea capitis. Placa supurativa del cuero cabelludo con foliculitis y alopecia cicatricial. Generalmente causada por dermatofitos zoofílicos (*T. verrucosum*, *M. canis*). Muestra: pus con jeringa o escobillón.
`Categoría: Dermatofitos`

---

## L

**Lactrimel**
Medio de cultivo semisólido usado para favorecer la esporulación de dermatofitos y facilitar su identificación microscópica. Alternativa o complemento al agar Sabouraud.
`Categoría: Técnicas`

**Levadura**
Hongo unicelular de forma redondeada u oval. Reproducción por gemación. Colonias cremosas en cultivo. Algunas (como *C. albicans*) pueden formar pseudohifas e hifas verdaderas (formas dimórficas).
`Categoría: Morfología`

---

## M

**Macroconidias**
Esporas asexuales grandes y multicelulares (pluritabicadas). Clave en la identificación de dermatofitos: *Epidermophyton* (forma palo de golf), *Trichophyton* (forma lápiz/fusiforme), *Microsporum* (fusiforme con pared rugosa).
`Categoría: Morfología`

**MALDI-TOF**
Técnica de espectrometría de masas usada para identificación rápida de microorganismos. Identifica el perfil proteico del hongo, permitiendo identificación en minutos. Cada vez más usada en lugar del API o pruebas bioquímicas clásicas.
`Categoría: Diagnóstico`

**McFarland**
Escala de turbidez que se usa para estandarizar la concentración de una suspensión microbiana. En el API 20 C AUX se usa el **McFarland n.º 2** para preparar la suspensión de levaduras (~6×10⁸ UFC/ml).
`Categoría: Técnicas`

**Micelio**
Conjunto de hifas que forma el cuerpo vegetativo de un hongo filamentoso. El micelio aéreo porta las estructuras reproductoras; el micelio vegetativo absorbe nutrientes del sustrato.
`Categoría: Morfología`

**Micosis**
Infección causada por hongos. Se clasifican según su localización en: superficiales, subcutáneas, sistémicas y oportunistas.
`Categoría: Morfología`

**Microconidias**
Esporas asexuales pequeñas y unicelulares. En dermatofitos, son clave en la diferenciación: *Trichophyton* las produce en gran cantidad (redondas o en lágrima); *Microsporum* produce pocas; *Epidermophyton* no produce ninguna.
`Categoría: Morfología`

**Moho**
Sinónimo de hongo filamentoso. Organismo pluricelular que crece formando hifas y micelio. Ejemplos: *Aspergillus*, *Trichophyton*, *Microsporum*.
`Categoría: Morfología`

**Muguet**
Nombre popular de la candidiasis orofaríngea. Placas blanquecinas en lengua y mucosa oral, que se desprenden al rasparlas, dejando una base eritematosa.
`Categoría: Candidiasis`

**Mycobiotic Agar**
Medio de cultivo selectivo para dermatofitos que contiene cicloheximida. Inhibe hongos contaminantes saprófitos pero permite el crecimiento de *Trichophyton*, *Microsporum* y *Epidermophyton*.
`Categoría: Técnicas`

---

## N

**Neutropenia**
Disminución del número de neutrófilos en sangre (<500/μL en neutropenia severa). Principal factor de riesgo de IFI por *Aspergillus* y *Candida*. Frecuente tras quimioterapia o trasplante.
`Categoría: Diagnóstico`

**Nutrición parenteral**
Administración de nutrientes directamente por vía intravenosa. Factor de riesgo importante de candidemia, especialmente en pacientes críticos, porque altera la flora intestinal y requiere catéter central.
`Categoría: Candidiasis`

---

## O

**Odinofagia**
Dolor al deglutir. Síntoma cardinal de la esofagitis candidiásica. Diferente de la disfagia (dificultad para tragar).
`Categoría: Candidiasis`

**Onicomicosis (Tinea unguium)**
Infección fúngica de las uñas. Es la forma de dermatofitosis de mayor dificultad diagnóstica y de tratamiento. Formas: subungueal distal (más frecuente), subungueal proximal, distrofia total. El examen directo tiene mayor sensibilidad que el cultivo en uñas.
`Categoría: Dermatofitos`

**Oportunista**
Hongo habitualmente inócuo que produce infección en huéspedes con defensas comprometidas. Candida, *Aspergillus*, *Cryptococcus*, *Rhizopus* son los principales hongos oportunistas clínicos.
`Categoría: Morfología`

---

## P

**Paroniquia**
Infección del pliegue ungueal (cutícula y tejido periungueal) por *Candida*. Provoca eritema, tumefacción y dolor. Síndrome cutáneo candidiásico.
`Categoría: Candidiasis`

**Patógeno oportunista**
Ver *Oportunista*.
`Categoría: Morfología`

**PCR (Reacción en Cadena de la Polimerasa)**
Técnica de biología molecular de alta sensibilidad y especificidad para detectar ADN fúngico. En micología, útil en sangre y BAL para *Aspergillus* y *Candida*. Pendiente de mayor estandarización.
`Categoría: Diagnóstico`

**Pie de pie (célula de pie)**
Célula especializada de las hifas de *Aspergillus* desde la cual surge el conidióforo. Tiene paredes engrosadas y es la base de la estructura reproductora.
`Categoría: Aspergillus`

**Pitiriasis versicolor**
Micosis superficial causada por *Malassezia* spp. Produce manchas hipo o hiperpigmentadas en tronco. Diagnóstico: cinta adhesiva adherida a la lesión. Pertenece al grupo de micosis superficiales.
`Categoría: Morfología`

**Pseudohifa**
Cadena de levaduras alargadas que se forma cuando tras la gemación no se produce separación celular. Las células quedan unidas y forman un filamento que simula a una hifa pero con constricción en los tabiques. Característica de *Candida* spp.
`Categoría: Morfología`

**Prueba de la ureasa**
Prueba bioquímica que detecta la producción del enzima ureasa. Diferencia *T. mentagrophytes* (ureasa +) de *T. rubrum* (ureasa −). Es la prueba clave para distinguir estas dos especies de Trichophyton.
`Categoría: Técnicas`

**Prueba del tubo germinativo**
Incubación de *Candida* en suero humano a 37°C durante 2–3 horas. Si se forma un tubo filamentoso sin estrangulamiento, la prueba es positiva → *C. albicans* (o *C. dubliniensis*). Prueba de identificación rápida y presuntiva.
`Categoría: Candidiasis`

---

## Q

**Querion**
Ver *Kerion*.
`Categoría: Dermatofitos`

**Queratinofílico**
Que tiene afinidad por la queratina. Los dermatofitos son hongos queratinofílicos: producen queratinasas que degradan la queratina de piel, pelo y uñas como fuente de nutrición.
`Categoría: Dermatofitos`

---

## R

**Raspado**
Toma de muestra en dermatofitosis que consiste en raspar la piel o uña afectada con un bisturí o portaobjetos. La muestra se usa tanto para examen directo como para cultivo.
`Categoría: Técnicas`

**Resistencia intrínseca**
Resistencia a un antifúngico que es propia de la especie, no adquirida. Ejemplo: *C. krusei* es intrínsecamente resistente a fluconazol; *C. lusitaniae* a anfotericina B.
`Categoría: Farmacología`

---

## S

**Sensibilidad (diagnóstica)**
Proporción de casos verdaderamente positivos que son detectados por una prueba. El examen directo tiene baja sensibilidad en micología (no descarta infección si es negativo). El cultivo en BAL para *Aspergillus* tiene 20–60% de sensibilidad.
`Categoría: Diagnóstico`

**Sepsis nosocomial**
Sepsis adquirida dentro del entorno hospitalario. La candidiasis invasora supone el 5–10% de las sepsis nosocomiales.
`Categoría: Candidiasis`

**Septado**
Hifa que presenta tabiques o septos transversales que dividen el filamento en células. Los dermatofitos y *Aspergillus* tienen hifas septadas. Contrasta con las hifas cenocíticas de Mucorales (aseptadas).
`Categoría: Morfología`

---

## T

**Test de perforación del pelo**
Prueba de laboratorio para diferenciar *T. rubrum* (positivo: perfora el pelo in vitro) de otros Trichophyton. Pelo estéril se sumerge en agua con el hongo; se observa perforación a las 3–4 semanas.
`Categoría: Técnicas`

**Tinción de Gram**
Tinción diferencial bacteriana que también tiñe hongos. Los blastoconidios de *Candida* aparecen como grampositivos (violeta). Útil como primer examen directo rápido de muestras.
`Categoría: Técnicas`

**Tinea barbae**
Dermatofitosis de la barba. Dos formas: placa descamante (superficial) y lesión granulomatosa cutánea (profunda). Causada principalmente por *T. mentagrophytes* o *T. verrucosum* (zoofílicos).
`Categoría: Dermatofitos`

**Tinea capitis**
Dermatofitosis del cuero cabelludo. Propia de la infancia. Formas: no inflamatoria (endothrix o ectothrix) e inflamatoria (querion/kerion). Principales agentes: *T. tonsurans*, *M. canis*.
`Categoría: Dermatofitos`

**Tinea corporis**
Dermatofitosis de la piel lampiña del cuerpo. Lesión anular eritematosa con borde activo y centro más claro. Incluye la *tinea faciei* (cara).
`Categoría: Dermatofitos`

**Tinea cruris**
Dermatofitosis inguinal. Más frecuente en varones. Placa eritematosa en región inguinal que puede extenderse a muslos. Principales agentes: *E. floccosum*, *T. rubrum*.
`Categoría: Dermatofitos`

**Tinea manuum**
Dermatofitosis de la mano. Generalmente unilateral. Hiperqueratosis palmar. Frecuentemente asociada a tinea pedis.
`Categoría: Dermatofitos`

**Tinea pedis**
Dermatofitosis del pie ("pie de atleta"). La más frecuente en adultos. Tres formas: interdigital (la más común), vesiculosa e hiperqueratósica (mocasín). Agente más frecuente: *T. rubrum*.
`Categoría: Dermatofitos`

**Tinea unguium**
Ver *Onicomicosis*.
`Categoría: Dermatofitos`

**Tinea negra**
Micosis superficial causada por *Hortaea werneckii*. Produce manchas oscuras en palmas de manos o plantas de pies. Sin destrucción tisular.
`Categoría: Morfología`

**Tubo germinativo**
Ver *Prueba del tubo germinativo*.
`Categoría: Candidiasis`

---

## U

**Uniseriado**
Tipo de cabeza aspergilar en que las fiálides se disponen directamente sobre la vesícula, en una sola capa. Presente en *A. fumigatus*. Contraste con biseriado (dos capas).
`Categoría: Aspergillus`

**Ureasa**
Enzima que degrada la urea liberando amoniaco y CO₂. Prueba de laboratorio clave en micología: *T. mentagrophytes* (+), *T. rubrum* (−). También positiva en *Cryptococcus neoformans* (diferenciación de otras levaduras).
`Categoría: Técnicas`

---

## V

**Vaginitis candidiásica**
Principal causa de vaginitis infecciosa. Prurito intenso, secreción vaginal blanquecina, placas blanquecinas y eritema vulvar. Factores de riesgo: diabetes, antibióticos, embarazo, corticoides, anticonceptivos. Alta tasa de recidivas.
`Categoría: Candidiasis`

**Valor Predictivo Positivo (VPP)**
Probabilidad de que un resultado positivo en una prueba corresponda a un verdadero positivo. El BAL tiene un VPP >80% para *Candida* en pacientes inmunosuprimidos.
`Categoría: Diagnóstico`

**Vesícula (Aspergillus)**
Dilatación esférica o semiesférica en el extremo del conidióforo de *Aspergillus*. Sobre ella se disponen las fiálides (o las métulas en cabezas biseriadas). El tamaño, forma y ángulo de cobertura de la vesícula es clave para identificar la especie.
`Categoría: Aspergillus`

**Voriconazol**
Azol de segunda generación, antifúngico de elección en aspergilosis invasiva. Mayor espectro que fluconazol. Activo frente a *Aspergillus* y muchas especies de *Candida*, incluyendo algunas resistentes a fluconazol.
`Categoría: Farmacología`

---

## Z

**Zigomicosis (Mucormicosis)**
Infección por hongos del orden Mucorales (*Rhizopus*, *Mucor*, *Cunninghamella*). Hifas aseptadas (cenocíticas). Infección oportunista grave, angioinvasiva. Ocurre en neutropénicos, diabéticos con cetoacidosis y pacientes con desferrioxamina.
`Categoría: Morfología`

**Zoofílico**
Tipo ecológico de dermatofito cuyo reservorio principal son los animales. Produce inflamación intensa al infectar humanos. Ejemplos: *M. canis* (gatos/perros), *T. verrucosum* (ganado bovino), *T. equinum* (caballos).
`Categoría: Dermatofitos`

---

> 📌 **Consejo:** Para repasar el glosario, prueba a cubrirlo y solo leer el término, intentando recordar la definición antes de verla. Los términos marcados en **negrita** dentro de las definiciones son conceptos relacionados que también conviene dominar.

---

*Proyecto generado con Astro · Contenido basado en los materiales de clase de Micología Clínica (A. Sampedro) · ¡Mucho ánimo en el examen! 🍄*
