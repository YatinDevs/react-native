// assets.d.ts
// declare module "*.png" {
//   const value: string;
//   export default value;
// }

declare module "*.png" {
  import { ImageSourcePropType } from "react-native";
  const content: ImageSourcePropType;
  export default content;
}
