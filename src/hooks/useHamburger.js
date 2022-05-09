import {useState} from "react"

const useHamburger = (initial) => {
    const [isHamburgerActive, setIsHamburgerActive] = useState(initial);
    const toggleHamburgerHandler = () => {
      setIsHamburgerActive((state) => !state);
    };

    return [isHamburgerActive, toggleHamburgerHandler]
}

export default useHamburger