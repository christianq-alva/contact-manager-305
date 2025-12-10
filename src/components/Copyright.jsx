export default function CopyrightFullYear() {
    return (
        <div className="text-center text-gray-400 text-sm">
            <p className="mb-1">© Christian Quinteros</p>
            <p className="text-gray-500">{new Date().getFullYear()}</p>
        </div>
    )
}