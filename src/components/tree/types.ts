import type { ExtractPropTypes, PropType } from "vue"

export enum TreeGroupDir {
    horizontal,
    vertical
}

export const propsOptions = {
    data: {
        type: Object as PropType<Record<string, any>>,
        required: true
    },
    direction: {
        type: Array<Number>
    }
} as const
export type Props = ExtractPropTypes<typeof propsOptions>
