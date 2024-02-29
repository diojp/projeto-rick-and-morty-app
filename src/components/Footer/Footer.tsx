import { Link } from "react-router-dom"


export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <div className="d-flex justify-content-center align-items-center flex-wrap">
            <p className="text-gray-rm-100 text-success align-items-end">
                Coded by{' '}
                <Link to="https://github.com/diojp">
                    <span className="text-green-rm-300">Diego Magno</span>
                </Link>{' '}
                &#169; {currentYear}
            </p>
        </div>
    )
}
