export const FormInput = ({ label, placeholder, type, onChange, value }) => {
  return (
    <div className="form-group">
      <label for="exampleInputEmail1">{label}</label>
      <input
        type={type ? type : "text"}
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
