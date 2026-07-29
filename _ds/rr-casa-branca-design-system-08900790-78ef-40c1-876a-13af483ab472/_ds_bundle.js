/* @ds-bundle: {"format":4,"namespace":"RRCasaBrancaDesignSystem_089007","components":[{"name":"BenefitItem","sourcePath":"components/content/BenefitItem.jsx"},{"name":"ComparisonTable","sourcePath":"components/content/ComparisonTable.jsx"},{"name":"ProductIconTile","sourcePath":"components/content/ProductIconTile.jsx"},{"name":"Testimonial","sourcePath":"components/content/Testimonial.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Stepper","sourcePath":"components/navigation/Stepper.jsx"}],"sourceHashes":{"components/content/BenefitItem.jsx":"f5f0111e5b20","components/content/ComparisonTable.jsx":"dd45dc20d657","components/content/ProductIconTile.jsx":"267b6791970a","components/content/Testimonial.jsx":"f2d624b4d5a5","components/core/Badge.jsx":"7ad8acba864f","components/core/Button.jsx":"4bfe43dc8958","components/core/Card.jsx":"aee3e9d9db45","components/core/Icon.jsx":"ac19bc428868","components/feedback/Alert.jsx":"47230af3216d","components/forms/Input.jsx":"69ec1859b0ab","components/navigation/Stepper.jsx":"76ba5c8b6bf1","ui_kits/website/Home.jsx":"06aeefcd2791"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RRCasaBrancaDesignSystem_089007 = window.RRCasaBrancaDesignSystem_089007 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/BenefitItem.jsx
try { (() => {
function BenefitItem({
  icon,
  title,
  description
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, React.createElement('div', {
    style: {
      color: 'var(--brand-cta)',
      flexShrink: 0,
      marginTop: 2
    }
  }, icon), React.createElement('div', null, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 16,
      color: 'var(--text-heading)',
      marginBottom: 4
    }
  }, title), React.createElement('div', {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      lineHeight: 1.5
    }
  }, description)));
}
Object.assign(__ds_scope, { BenefitItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/BenefitItem.jsx", error: String((e && e.message) || e) }); }

// components/content/ComparisonTable.jsx
try { (() => {
function ComparisonTable({
  columns,
  rows,
  recommendedIndex
}) {
  return React.createElement('div', {
    style: {
      overflowX: 'auto',
      borderRadius: 'var(--radius-l)',
      border: '1px solid var(--border-default)'
    }
  }, React.createElement('table', {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-body)',
      fontSize: 14
    }
  }, React.createElement('thead', null, React.createElement('tr', null, React.createElement('th', {
    style: {
      textAlign: 'left',
      padding: '14px 16px',
      background: 'var(--color-navy-mist)'
    }
  }, ''), columns.map((c, i) => React.createElement('th', {
    key: i,
    style: {
      textAlign: 'left',
      padding: '14px 16px',
      background: i === recommendedIndex ? 'var(--brand-primary)' : 'var(--color-navy-mist)',
      color: i === recommendedIndex ? '#fff' : 'var(--text-heading)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600
    }
  }, c)))), React.createElement('tbody', null, rows.map((r, ri) => React.createElement('tr', {
    key: ri,
    style: {
      borderTop: '1px solid var(--border-default)'
    }
  }, React.createElement('td', {
    style: {
      padding: '12px 16px',
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, r.label), r.values.map((v, ci) => React.createElement('td', {
    key: ci,
    style: {
      padding: '12px 16px',
      background: ci === recommendedIndex ? 'var(--color-navy-mist)' : 'transparent',
      color: 'var(--text-primary)'
    }
  }, v)))))));
}
Object.assign(__ds_scope, { ComparisonTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ComparisonTable.jsx", error: String((e && e.message) || e) }); }

// components/content/ProductIconTile.jsx
try { (() => {
function ProductIconTile({
  icon,
  label,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('button', {
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      background: hover ? 'var(--color-navy-mist)' : '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-l)',
      padding: '20px 12px',
      cursor: 'pointer',
      transition: 'background var(--dur-standard)',
      minHeight: 110,
      ...style
    }
  }, React.createElement('span', {
    style: {
      color: 'var(--brand-primary)'
    }
  }, icon), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '.02em',
      color: 'var(--text-heading)',
      textAlign: 'center',
      textTransform: 'uppercase'
    }
  }, label));
}
Object.assign(__ds_scope, { ProductIconTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProductIconTile.jsx", error: String((e && e.message) || e) }); }

// components/content/Testimonial.jsx
try { (() => {
function Testimonial({
  quote,
  name,
  context
}) {
  return React.createElement('div', {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-xl)',
      padding: 24,
      boxShadow: 'var(--shadow-card)'
    }
  }, React.createElement('div', {
    style: {
      color: 'var(--brand-cta)',
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      lineHeight: 0.6,
      marginBottom: 8
    }
  }, '"'), React.createElement('p', {
    style: {
      fontStyle: 'italic',
      fontSize: 16,
      color: 'var(--text-primary)',
      margin: '0 0 16px',
      lineHeight: 1.5
    }
  }, quote), React.createElement('div', {
    style: {
      fontWeight: 600,
      color: 'var(--text-heading)',
      fontSize: 14
    }
  }, name, React.createElement('span', {
    style: {
      fontWeight: 400,
      color: 'var(--text-muted)'
    }
  }, ' · ' + context)));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const tones = {
  neutral: {
    background: 'var(--color-navy-mist)',
    color: 'var(--brand-primary)'
  },
  cta: {
    background: 'var(--color-orange-100)',
    color: 'var(--color-orange-900)'
  },
  success: {
    background: 'var(--color-success-bg)',
    color: 'var(--color-success)'
  }
};
function Badge({
  tone = 'neutral',
  children
}) {
  const t = tones[tone] || tones.neutral;
  return React.createElement('span', {
    style: {
      ...t,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '.02em',
      padding: '4px 12px',
      borderRadius: 'var(--radius-pill)',
      display: 'inline-block'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const variants = {
  primary: {
    background: 'var(--brand-cta)',
    color: 'var(--text-on-cta)',
    border: '1px solid transparent'
  },
  secondary: {
    background: 'var(--brand-primary)',
    color: '#fff',
    border: '1px solid transparent'
  },
  tertiary: {
    background: 'transparent',
    color: 'var(--brand-primary)',
    border: '1px solid var(--brand-primary)'
  },
  link: {
    background: 'transparent',
    color: 'var(--link-color)',
    border: 'none',
    padding: 0,
    minHeight: 'auto'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  disabled,
  children,
  onClick,
  style,
  ...rest
}) {
  const v = variants[variant] || variants.primary;
  const sizes = {
    sm: {
      minHeight: 40,
      padding: '0 16px',
      fontSize: 14
    },
    md: {
      minHeight: 44,
      padding: '0 24px',
      fontSize: 15
    },
    lg: {
      minHeight: 52,
      padding: '0 32px',
      fontSize: 16
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    borderRadius: variant === 'link' ? 0 : 'var(--radius-l)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'filter var(--dur-standard) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
    ...v,
    ...s,
    ...style
  };
  return React.createElement('button', {
    disabled,
    onClick,
    style: base,
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(0.92)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = 'none';
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    ...rest
  }, children, icon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  padding = 24,
  elevated = true,
  children,
  style
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      padding,
      border: elevated ? 'none' : '1px solid var(--border-default)',
      boxShadow: elevated ? 'var(--shadow-card)' : 'none',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function Icon({
  name,
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  className = ''
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = '';
      window.lucide.createIcons({
        nameAttr: 'data-lucide',
        attrs: {
          width: size,
          height: size,
          color,
          'stroke-width': strokeWidth
        }
      });
    }
  }, [name, size, color, strokeWidth]);
  return React.createElement('i', {
    ref,
    'data-lucide': name,
    className,
    style: {
      display: 'inline-flex',
      lineHeight: 0
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const tones = {
  success: {
    bg: 'var(--color-success-bg)',
    fg: 'var(--color-success)',
    icon: 'check-circle-2'
  },
  warning: {
    bg: 'var(--color-warning-bg)',
    fg: 'var(--color-warning)',
    icon: 'alert-triangle'
  },
  error: {
    bg: 'var(--color-error-bg)',
    fg: 'var(--color-error)',
    icon: 'x-circle'
  },
  info: {
    bg: 'var(--color-info-bg)',
    fg: 'var(--brand-digital)',
    icon: 'info'
  }
};
function Alert({
  tone = 'info',
  title,
  description
}) {
  const t = tones[tone] || tones.info;
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      background: t.bg,
      borderRadius: 'var(--radius-l)',
      padding: '16px 18px'
    }
  }, React.createElement('i', {
    ref,
    'data-lucide': t.icon,
    style: {
      color: t.fg,
      flexShrink: 0,
      marginTop: 2
    }
  }), React.createElement('div', null, title && React.createElement('div', {
    style: {
      fontWeight: 600,
      color: 'var(--text-primary)',
      fontSize: 15
    }
  }, title), description && React.createElement('div', {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, description)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  error,
  placeholder,
  type = 'text',
  value,
  onChange,
  style
}) {
  const [focused, setFocused] = React.useState(false);
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && React.createElement('span', {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--text-primary)'
    }
  }, label), React.createElement('input', {
    type,
    placeholder,
    value,
    onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      height: 48,
      borderRadius: 'var(--radius-m)',
      border: `1px solid ${error ? 'var(--color-error)' : focused ? 'var(--brand-digital)' : 'var(--border-default)'}`,
      padding: '0 14px',
      fontSize: 15,
      fontFamily: 'var(--font-body)',
      outline: 'none',
      background: '#fff',
      color: 'var(--text-primary)',
      boxShadow: focused ? '0 0 0 3px rgba(36,85,184,0.15)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }), error && React.createElement('span', {
    style: {
      fontSize: 12,
      color: 'var(--color-error)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Stepper.jsx
try { (() => {
function Stepper({
  steps,
  current = 0
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      width: '100%'
    }
  }, steps.map((s, i) => React.createElement(React.Fragment, {
    key: i
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      flex: i === steps.length - 1 ? '0 0 auto' : 1
    }
  }, React.createElement('div', {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      background: i < current ? 'var(--color-success)' : i === current ? 'var(--brand-cta)' : 'var(--color-gray-200)',
      color: i <= current ? '#fff' : 'var(--text-muted)'
    }
  }, i < current ? '✓' : i + 1), React.createElement('span', {
    style: {
      fontSize: 12,
      textAlign: 'center',
      maxWidth: 110,
      color: i === current ? 'var(--text-heading)' : 'var(--text-muted)',
      fontWeight: i === current ? 600 : 400
    }
  }, s)), i < steps.length - 1 && React.createElement('div', {
    style: {
      flex: 2,
      height: 2,
      background: i < current ? 'var(--color-success)' : 'var(--color-gray-200)',
      marginTop: 15
    }
  }))));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Stepper.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  Input,
  Alert,
  Stepper,
  ProductIconTile,
  BenefitItem,
  Testimonial,
  ComparisonTable,
  Icon
} = window.RRCasaBrancaDesignSystem_089007;
function Header() {
  const links = ['Início', 'Seguros', 'Para você', 'Para empresas', 'Sobre nós', 'Atendimento'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 48px',
      background: '#fff',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    style: {
      height: 44
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: i === 0 ? 'var(--brand-primary)' : 'var(--text-primary)',
      fontWeight: i === 0 ? 600 : 500,
      fontSize: 14
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "COTAR AGORA"));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--brand-primary)',
      overflow: 'hidden',
      padding: '80px 48px',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -120,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 520,
      height: 520,
      borderRadius: '50%',
      border: '70px solid rgba(255,255,255,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -40,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 420,
      height: 420,
      borderRadius: '50%',
      border: '60px solid var(--brand-cta)',
      opacity: 0.9,
      clipPath: 'inset(0 0 0 35%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 48,
      lineHeight: 1.12
    }
  }, "Prote\xE7\xE3o inteligente."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 48,
      lineHeight: 1.12,
      color: 'var(--brand-cta)'
    }
  }, "Atendimento humano."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.85)',
      margin: '20px 0 28px'
    }
  }, "Cuidamos de cada detalhe da sua prote\xE7\xE3o para garantir a tranquilidade de cada conquista."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "COTAR AGORA"), /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    size: "lg",
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.5)'
    }
  }, "Falar com um consultor")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32
    }
  }, [['shield-check', 'Proteção completa'], ['headset', 'Atendimento próximo'], ['thumbs-up', 'Soluções personalizadas'], ['handshake', 'Confiança desde 1995']].map(([ic, label]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      maxWidth: 110,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    color: "var(--brand-cta)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600
    }
  }, label)))))));
}
function Products() {
  const products = [['car', 'Seguro Auto'], ['home', 'Residencial'], ['heart-handshake', 'Seguro de Vida'], ['building-2', 'Empresarial'], ['tractor', 'Agro'], ['plane', 'Viagem']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '64px 48px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      color: 'var(--text-heading)',
      marginBottom: 8
    }
  }, "Nossos produtos"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      marginBottom: 32
    }
  }, "Compare op\xE7\xF5es e escolha com transpar\xEAncia, com apoio de um consultor."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: 16
    }
  }, products.map(([ic, label]) => /*#__PURE__*/React.createElement(ProductIconTile, {
    key: label,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 28
    }),
    label: label
  }))));
}
function Benefits() {
  const items = [['shield-check', 'Consultoria de verdade', 'Proteção adequada ao seu momento, não apenas uma cotação.'], ['headset', 'Atendimento ágil', 'Respostas claras por WhatsApp, telefone ou presencialmente.'], ['layers', 'Várias seguradoras', 'Opções para comparar com critério e transparência.']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-soft)',
      padding: '64px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 32
    }
  }, items.map(([ic, t, d]) => /*#__PURE__*/React.createElement(BenefitItem, {
    key: t,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: ic
    }),
    title: t,
    description: d
  }))));
}
function ProposalFlow() {
  const [step, setStep] = React.useState(2);
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '64px 48px',
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      color: 'var(--text-heading)',
      marginBottom: 24
    }
  }, "Acompanhe sua proposta"), /*#__PURE__*/React.createElement(Stepper, {
    steps: ['Solicitação recebida', 'Análise do consultor', 'Cotação personalizada', 'Escolha da proteção', 'Apólice emitida'],
    current: step
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    size: "sm",
    onClick: () => setStep(s => Math.max(0, s - 1))
  }, "Etapa anterior"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: () => setStep(s => Math.min(4, s + 1))
  }, "Pr\xF3xima etapa"))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 16px',
      color: 'var(--text-heading)',
      fontFamily: 'var(--font-display)'
    }
  }, "Solicite uma cota\xE7\xE3o"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Seu nome completo",
    placeholder: "Digite seu nome"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Telefone (WhatsApp)",
    placeholder: "(19) 99999-0000"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setSent(true)
  }, "ENVIAR SOLICITA\xC7\xC3O"), sent && /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "Solicita\xE7\xE3o enviada com sucesso!",
    description: "Entraremos em contato em breve."
  }))));
}
function Comparison() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 48px 64px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      color: 'var(--text-heading)',
      marginBottom: 24
    }
  }, "Compare com crit\xE9rio"), /*#__PURE__*/React.createElement(ComparisonTable, {
    columns: ['Essencial', 'Completo', 'Premium'],
    recommendedIndex: 1,
    rows: [{
      label: 'Cobertura',
      values: ['Básica', 'Ampliada', 'Total']
    }, {
      label: 'Franquia',
      values: ['Alta', 'Média', 'Baixa']
    }, {
      label: 'Assistência 24h',
      values: ['—', 'Sim', 'Sim']
    }, {
      label: 'Rede de atendimento',
      values: ['Regional', 'Nacional', 'Nacional +']
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "cta"
  }, "Melhor equil\xEDbrio entre prote\xE7\xE3o e custo")));
}
function TestimonialSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 800,
      margin: '0 auto',
      padding: '0 48px 64px'
    }
  }, /*#__PURE__*/React.createElement(Testimonial, {
    quote: "Atendimento excelente e total confian\xE7a. Me senti seguro do in\xEDcio ao fim.",
    name: "Mariana S.",
    context: "Cliente"
  }));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--brand-primary)',
      color: 'rgba(255,255,255,0.8)',
      padding: '40px 48px',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, "Rua Altino Arantes, 122 \xB7 Centro \xB7 Casa Branca\u2013SP \xB7 CEP 13700-079"), /*#__PURE__*/React.createElement("div", null, "(19) 99304-0500 \xB7 casabranca@grupominhaterra.com.br"), /*#__PURE__*/React.createElement("div", null, "@rrcasabranca"));
}
function Home() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Products, null), /*#__PURE__*/React.createElement(Benefits, null), /*#__PURE__*/React.createElement(ProposalFlow, null), /*#__PURE__*/React.createElement(Comparison, null), /*#__PURE__*/React.createElement(TestimonialSection, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Home, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BenefitItem = __ds_scope.BenefitItem;

__ds_ns.ComparisonTable = __ds_scope.ComparisonTable;

__ds_ns.ProductIconTile = __ds_scope.ProductIconTile;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Stepper = __ds_scope.Stepper;

})();
