import "./ErrorComponent.scss";

export function ErrorComponent() {
  return (
    <div className="error__box">
      <img className="error-img" src="./src/assets/404.png" alt="error-icon" />
      <h1 className="error-title">Oooops... something went wrong</h1>
    </div>
  );
}
