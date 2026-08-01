function RetroPanel({
  title,
  children,
  className = "",
  titleAs: Title = "h2",
  ...props
}) {
  const panelClassName = `retro-panel ${className}`.trim();

  return (
    <section className={panelClassName} {...props}>
      <div className="retro-panel__titlebar">
        <Title className="retro-panel__title">{title}</Title>
        <span className="retro-panel__indicator" aria-hidden="true">
          ●
        </span>
      </div>

      <div className="retro-panel__body">{children}</div>
    </section>
  );
}

export default RetroPanel;
