# Sistema Tipográfico Trendit - Campton

## Familia tipográfica
**Campton** es la familia tipográfica oficial de Trendit para todo el proyecto.

## Pesos disponibles

- **Light (300)** - Textos auxiliares muy suaves
- **Regular (400)** - Texto de cuerpo y párrafos
- **Medium (500)** - Subtítulos menores y labels
- **SemiBold (600)** - Subtítulos H2/H3
- **Bold (700)** - Títulos principales H1

## Jerarquía tipográfica

### Títulos principales (H1)
- **Fuente:** Campton Bold (700)
- **Line-height:** 1.2
- **Uso:** Hero titles, títulos de página principal
- **Ejemplo:** "Transformamos desafíos en oportunidades con tecnología"

### Subtítulos principales (H2)
- **Fuente:** Campton SemiBold (600)
- **Line-height:** 1.3
- **Uso:** Títulos de sección, headers de componentes
- **Ejemplo:** "¿Por qué las empresas se quedan con Trendit?"

### Subtítulos secundarios (H3)
- **Fuente:** Campton Medium (500)
- **Line-height:** 1.4
- **Uso:** Títulos de cards, subsecciones
- **Ejemplo:** "Infraestructura IT & Data Center"

### Párrafos y texto de cuerpo
- **Fuente:** Campton Regular (400)
- **Line-height:** 1.6
- **Uso:** Descripción de servicios, contenido general
- **Ejemplo:** Todos los textos descriptivos y de contenido

### Botones y CTAs
- **Fuente:** Campton Medium (500) o SemiBold (600)
- **Line-height:** 1.5
- **Uso:** Botones principales, CTAs, navegación
- **Ejemplo:** "Agendar una reunión con Trendit"

### Labels y etiquetas
- **Fuente:** Campton Medium (500)
- **Line-height:** 1.5
- **Uso:** Labels de formularios, chips, tags
- **Ejemplo:** "ÁRBOLES PLANTADOS"

### Texto auxiliar pequeño
- **Fuente:** Campton Regular (400) o Light (300)
- **Line-height:** 1.5-1.6
- **Uso:** Footer, disclaimers, texto secundario
- **Ejemplo:** Copyright, términos y condiciones

## Clases CSS disponibles

### Clases utilitarias (en globals.css)

```css
.font-campton            /* Campton sin peso específico */
.font-campton-light      /* 300 */
.font-campton-regular    /* 400 */
.font-campton-medium     /* 500 */
.font-campton-semibold   /* 600 */
.font-campton-bold       /* 700 */
```

### Aplicación automática
Todos los elementos HTML (h1-h4, p, button, label, input) ya tienen Campton aplicado automáticamente a través de los estilos base en `globals.css`.

## Implementación

### Estilos inline (cuando sea necesario)
```tsx
style={{ 
  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontWeight: 700 
}}
```

### Clases Tailwind
Los componentes que usan clases de Tailwind heredan Campton automáticamente del body:
```tsx
<h1 className="text-5xl">Título</h1>  // Ya usa Campton Bold
<p className="text-base">Párrafo</p>  // Ya usa Campton Regular
```

## Notas de implementación

1. ✅ **globals.css actualizado** con @font-face declarations para Campton
2. ✅ **Estilos base** configurados con Campton para todos los elementos HTML
3. ✅ **Body** configurado con Campton como fuente principal
4. ✅ **Clases utilitarias** creadas para uso flexible
5. ✅ **Hero y Stats** ya usan Campton con estilos inline
6. ✅ **Todos los demás componentes** heredan Campton automáticamente

## Responsividad

Los tamaños de fuente se ajustan automáticamente en diferentes breakpoints usando las clases responsive de Tailwind:

```tsx
className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] xl:text-[64px]"
```

El line-height se ajusta según el tipo de contenido para óptima legibilidad en todos los dispositivos.
