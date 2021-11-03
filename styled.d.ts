import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        body: string;
        text: string;
        gradient: {
            red: string;
            yellow: string;
        }
        opacity: {
            normal: string;
            hover: string;
        }
    }
}
