import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        body: string;
        text: string;
        menu: string;
        gradient: {
            one: string;
            two: string;
        },
        accent: {
            one: string;
            two: string;
        }
        opacity: {
            normal: string;
            hover: string;
        }
        brightness: string;
    }
}
