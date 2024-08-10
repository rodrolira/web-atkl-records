const Button = ({ onClick, text, colorClass }) => (
    <button
      className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 ${colorClass} text-sm font-bold leading-normal tracking-[0.015em]`}
      onClick={onClick}
    >
      <span className="truncate">{text}</span>
    </button>
  )

  export default Button
