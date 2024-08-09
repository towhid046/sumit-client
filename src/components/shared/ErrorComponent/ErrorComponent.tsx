interface ErrorComponentProps {
  error: React.ReactNode;
}
const ErrorComponent = ({ error }: ErrorComponentProps) => {
  return (
    <div className="flex justify-center py-12">
      <span className="text-xl font-semibold italic">{error}</span>
    </div>
  );
};

export default ErrorComponent;
