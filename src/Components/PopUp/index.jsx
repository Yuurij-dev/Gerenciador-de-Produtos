import { motion } from "framer-motion";
import './styles.css'

function PopUp() {
    return(
        <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 50, opacity: 1 }}
        exit={{ y: -100, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", times: [0, 0.25, 0.75, 1], delay: 0.5 }}
        className="absolute left-1/2 top-0 transform -translate-x-1/2"
        > 
            <div className="poops text-sm font-bold text-green-500 rounded bg-green-100" id="poop-add-produto">
                <span  className="text-green-600">Produto adicionado com sucesso!</span>
            </div>
        </motion.div>
        
    )
}

export default PopUp