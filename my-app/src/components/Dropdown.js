import Vector from "../icons/Vector.png";
function Input({ icon, title, isDropdown }) {
  return (
    <div className="custom-dropdown">
      <div className="icon_and_title">
        <img src={icon} width={16} height={16} alt="icon" />
        <div>{title}</div>
      </div>
      {isDropdown && <img src={Vector} width={11} height={5} alt="icon" />}
    </div>
  );
}
export default Input;
