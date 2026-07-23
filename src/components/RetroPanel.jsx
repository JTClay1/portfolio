function RetroPanel({ title, children, className = "", ...props }) {
  const panelClassName = `retro-panel ${className}`.trim();

  return (
    <section className={panelClassName} {...props}>
      <div className="retro-panel__titlebar">
        <h2>{title}</h2>
        <span className="retro-panel__indicator" aria-hidden="true">
          ●
        </span>
      </div>

      <div className="retro-panel__body">{children}</div>
    </section>
  );
}

export default RetroPanel;