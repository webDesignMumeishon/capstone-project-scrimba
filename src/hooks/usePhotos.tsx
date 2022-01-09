import { GlobalContext } from "../Context"
import {useContext} from "react"

export const usePhotos = () => {
    return useContext(GlobalContext)
}

