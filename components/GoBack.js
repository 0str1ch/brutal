import IconArrowLeft from "../components/icons/IconArrowLeft";
import Link from "next/link";

const GoBack = () => (
  <div>
    <Link href="/">
      <a className="goBack">
        <IconArrowLeft />
      </a>
    </Link>

    <style jsx>{`
      .goBack {
        bottom: 1rem;
        position: absolute;
        left: 1rem;
        color: var(--primary-text);
      }
    `}</style>
  </div>
);

export default GoBack;
