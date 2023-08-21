import "@/less/tree/main.less"
import { propsOptions, type Props } from "@/components/tree/types"


export default defineComponent({
    props: propsOptions,
    setup(props: Props) {
        const data = props.data
        // console.log(props.direction)
        return () => (
            <div class='auto-w-h flex flex-center'>
                {/* 根节点 */}
                
                {data && data.id ?
                    <div class='root flex flex-center pos-relative'>
                        {data.label}

                        {/* direction */}
                        {props.direction && props.direction[0] != undefined && props.direction[0] == 0 ? <div class='dir-h pos-absolute'></div> : <div class='dir-v pos-absolute'></div>}
                        
                    </div> : <div></div>}
            </div>
        )
    }
})