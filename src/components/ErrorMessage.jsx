function ErrorMessage({ message }) {
  return (
    <div className="bg-red-500 text-white p-3 rounded mb-4">
      ⚠️ {message}
    </div>
  );
}

export default ErrorMessage;
