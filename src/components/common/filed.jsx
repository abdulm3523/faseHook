const Filed = ({ label, htmlFor, children, error }) => {
  return (
    <div class="form-control">
      {label && (
        <label class="auth-label" htmlFor={htmlFor}>
          {label}
        </label>
      )}
      {children}
      {!!error && (
        <div role="alert" className="text-red-600">
          {error.message}
        </div>
      )}
    </div>
  );
};

export default Filed;
