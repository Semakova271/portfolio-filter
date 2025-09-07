function IconSwitch({ icon, onSwitch }) {
  return (
    <button
      className="icon-switch"
      type="button"
      onClick={onSwitch}
    >
      <span className="icon-switch__icon material-icons">{icon}</span>
    </button>
  );
}

export default IconSwitch;