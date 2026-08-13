# Softmat Servicios SAS - Landing Page

Landing page corporativo para Softmat Servicios SAS, empresa especializada en outsourcing TI y gestión administrada de infraestructura tecnológica.

## � Características

- **100% Compatible con Odoo**: HTML5, CSS3 y JavaScript vanilla sin dependencias externas
- **Responsive Design**: Optimizado para móvil, tablet y escritorio
- **Dark Mode**: Alternador de tema con persistencia en localStorage
- **Animaciones Suaves**: Transiciones y animaciones con IntersectionObserver
- **Performance Optimizado**: Sin librerías externas, código limpio y eficiente
- **Accesibilidad**: Estructura semántica HTML5 con ARIA labels

## 📁 Estructura del Proyecto

```
SoftMat_codex/
├── assets/
│   ├── icons/          # Logos de partners (carrusel)
│   ├── images/         # Imágenes de secciones
│   └── logo/           # Logo de Softmat
├── css/
│   └── style.css       # Estilos CSS3 vanilla
├── js/
│   └── script.js       # JavaScript ES6 vanilla
├── index.html          # Página principal
└── README.md           # Este archivo
```

## 🛠️ Tecnologías

- **HTML5**: Estructura semántica
- **CSS3**: Variables CSS, Grid, Flexbox, Animations
- **JavaScript ES6**: Vanilla JS sin frameworks
- **SVG**: Iconos inline optimizados

## 📋 Secciones

1. **Hero**: Presentación con métricas animadas
2. **Problemas**: Identificación de necesidades del cliente
3. **Decisores**: Información para CEO, CTO y CFO
4. **Comparación**: Tabla comparativa TI interno vs Softmat
5. **Resultados & Planes**: Métricas y planes de servicio
6. **Diagnóstico**: Formulario de contacto con validación
7. **Footer**: Información de contacto y redes sociales

## 🎨 Paleta de Colores

- **Primary**: #315fd4 (Azul Softmat)
- **Secondary**: #6a43b8 (Morado Softmat)
- **Background Light**: #f8f8fb
- **Background Dark**: #0f1419

## 🚀 Instalación

1. Clonar el repositorio:
```bash
git clone [URL_DEL_REPO]
cd SoftMat_codex
```

2. Abrir `index.html` en tu navegador o servir con un servidor local:
```bash
# Opción 1: Python
python -m http.server 8000

# Opción 2: Node.js
npx http-server

# Opción 3: PHP
php -S localhost:8000
```

3. Visitar `http://localhost:8000`

## � Integración con Odoo

Este proyecto está diseñado para ser 100% compatible con Odoo. Para integrarlo:

1. Copiar archivos a módulo Odoo:
```
tu_modulo/
├── static/src/
│   ├── css/style.css
│   ├── js/script.js
│   └── [assets]
└── views/
    └── landing_page.xml
```

2. Registrar assets en `__manifest__.py`:
```python
'assets': {
    'web.assets_frontend': [
        'tu_modulo/static/src/css/style.css',
        'tu_modulo/static/src/js/script.js',
    ],
}
```

3. Crear template QWeb con el contenido de `index.html`

## 🌐 Compatibilidad de Navegadores

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Opera 76+

## 📝 Características Técnicas

- **Sin dependencias externas**: 0 KB de librerías
- **CSS optimizado**: ~60KB
- **JavaScript optimizado**: ~8KB
- **Animaciones GPU-accelerated**
- **IntersectionObserver** para animaciones eficientes
- **Smooth scroll** nativo

## 🔒 Seguridad

- Sin `eval()` o código dinámico
- Validación de formularios
- Compatible con Content Security Policy (CSP)
- CSRF ready para Odoo

## 📱 Responsive

- Mobile first design
- Breakpoints: 768px, 1024px
- Touch-friendly
- Optimizado para todas las pantallas

## 📄 Licencia

© 2026 Softmat Servicios SAS. Todos los derechos reservados.

## 📧 Contacto

- **Web**: https://softmatservices.com
- **Email**: contacto@softmatservices.com
- **Teléfono**: +57 (1) XXX-XXXX

---

Desarrollado con ❤️ por el equipo de Softmat
