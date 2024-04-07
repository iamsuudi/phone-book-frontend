import View from "../hoc/UseInView";

export default function Success({ children }) {
    return (
        <View>
            <div role="alert" className="alert alert-success max-w-screen-xl mx-auto">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <span>Success! {children}</span>
            </div>
        </View>
    );
}
