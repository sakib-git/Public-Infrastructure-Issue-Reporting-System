export default function SubmitButton({ isSubmitting = false, text = '' }) {
  return (
    <button className="btn mb-2 w-full rounded-md bg-[#25408f] font-semibold text-white outline-none">
      {isSubmitting ? (
        <span className="loading loading-spinner loading-xs"></span>
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
}
