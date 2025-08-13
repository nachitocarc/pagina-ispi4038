�� Proyecto: Desarrollo de Página
Web Responsive con Integración de
API de Cotizaciones

1. Objetivo del Proyecto
Desarrollar una página web moderna, responsive y funcional para un centro educativo,
que permita a los usuarios acceder a información institucional y visualizar en tiempo
real las cotizaciones de activos financieros mediante la integración de una API externa.

2. Características Principales
 _Diseño adaptable a dispositivos móviles, tablets y escritorio.
 _Interfaz intuitiva y amigable.
 _Visualización dinámica de cotizaciones actualizadas.
 _Secciones institucionales informativas.
 _Panel administrativo para configuración básica.

3. Secciones Sugeridas del Sitio Web
 Información Institucional (BASE DE DATOS)
_ Quiénes somos: Historia, misión, visión y valores del centro educativo.
_ Autoridades: Presentación del equipo directivo y docente.
_ Oferta académica: Carreras, cursos y programas disponibles.
_ Noticias y novedades: Blog o sección de actualizaciones.
_ Calendario académico: Fechas importantes, exámenes, eventos.
_ Contacto: Formulario, ubicación en mapa, redes sociales.
_ Cotizaciones en Tiempo Real (API)
_ Visualización de cotizaciones de monedas, criptomonedas o acciones.
_ Filtros por tipo de activo o mercado.
_ Actualización automática cada X segundos/minutos.
_ Gráficos de evolución histórica (opcional).

4. Partes Involucradas

Rol Responsabilidades
Project Manager Coordinación general del proyecto, seguimiento de tiempos y

entregables.

Diseñador UX/UI Diseño de la interfaz y experiencia de usuario.
Desarrollador
Frontend Implementación del diseño y lógica de presentación.
Desarrollador
Backend Integración con la API externa, gestión de datos y seguridad.
QA Tester Pruebas de funcionalidad, compatibilidad y rendimiento.
Cliente/Stakeholder Validación de entregables y definición de requerimientos.

5. Tecnologías Propuestas
_ Frontend: HTML5, CSS3 y  JavaScript.

_Control de versiones: Git + GitHub


6. Diseño HTML y CSS
HTML
 Uso semántico de etiquetas (&lt;header&gt;, &lt;nav&gt;, &lt;section&gt;, &lt;article&gt;, &lt;footer&gt;)
 Formularios accesibles (&lt;form&gt;, &lt;label&gt;, &lt;input&gt;)
 Integración de íconos y multimedia (&lt;img&gt;, &lt;video&gt;, &lt;svg&gt;)
CSS
 Diseño responsive con media queries (@media)
 Flexbox y Grid para layout moderno
 Variables CSS para mantener consistencia de colores y fuentes
 Animaciones suaves con transition y transform
 Dark mode (opcional)

7. Integración de la API de Cotizaciones
Selección de API confiable: Se evaluará la documentación, frecuencia de
actualización, límites de uso y formato de respuesta (JSON).

 Consumo desde el frontend: Uso de fetch() o librerías como Axios para
obtener los datos.
Manejo de errores: Validación de respuestas, mensajes de error amigables.
 Actualización automática: Uso de setInterval() para refrescar datos sin
recargar la página.
 Visualización: Renderizado dinámico con tarjetas, tablas o gráficos (ej.
Chart.js).

8. Etapas del Proyecto
 Fase 1: Planificación
Relevamiento de requerimientos
Selección de API externa
Definición de arquitectura
 Fase 2: Diseño
Wireframes y prototipos
 Revisión con el cliente
Fase 3: Desarrollo
Maquetado responsive
Integración con API
Implementación de lógica de negocio
Fase 4: Pruebas
Pruebas funcionales y de compatibilidad
Corrección de errores
Fase 5: Implementación
Publicación en entorno productivo
Capacitación básica al cliente
Fase 6: Mantenimiento
Soporte técnico
Actualizaciones periódicas

9. Indicadores de Éxito
Tiempo de carga menor a 3 segundos.
Visualización correcta en +95% de dispositivos.

Datos actualizados en tiempo real.
Satisfacción del cliente y usuarios finales.

�� Diseño Visual Preliminar (Wireframe Textual)
┌─────────────────────────────────────────┐
│ HEADER │
│ [Logo] [Inicio] [Institucional] [Oferta] │
│ [Cotizaciones] [Noticias] [Contacto] │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│ BANNER PRINCIPAL │
│ Imagen destacada + mensaje institucional │
│ &quot;Formando líderes del futuro desde 1980&quot; │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│ SECCIÓN: INFORMACIÓN INSTITUCIONAL │
│ - Quiénes somos │
│ - Autoridades │
│ - Instalaciones (con galería de imágenes) │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│ SECCIÓN: OFERTA ACADÉMICA │
│ - Carreras y cursos │
│ - Modalidades (presencial, virtual) │
│ - Requisitos de inscripción │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│ SECCIÓN: COTIZACIONES EN VIVO │
│ [USD/ARS] [BTC/USD] [ETH/USD] [Oro] │
│ Tabla o tarjetas con valores actualizados │
│ Última actualización: 13:00 hs │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│ SECCIÓN: NOTICIAS Y NOVEDADES │
│ - Publicaciones recientes │
│ - Eventos próximos │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│ SECCIÓN: CONTACTO │

│ - Formulario de contacto │
│ - Mapa de ubicación │
│ - Redes sociales │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│ FOOTER │
│ © 2025 Centro Educativo Ejemplo │
│ Aviso legal | Política de privacidad │
└─────────────────────────────────────────┘
Detalles de Diseño HTML/CSS
Diseño responsive con media queries para adaptar el contenido a móviles y
tablets.
Menú de navegación fijo en la parte superior con efecto de scroll suave.
Tarjetas de cotizaciones con colores dinámicos (verde/rojo) según suba o baje
el valor.
Animaciones suaves para transiciones entre secciones (transition, hover, fade-
in).
Tipografía moderna (ej. Google Fonts: Poppins, Roboto).
Paleta de colores institucional: tonos sobrios y profesionales (azul, gris,
blanco).
Modo oscuro opcional con prefers-color-scheme.
