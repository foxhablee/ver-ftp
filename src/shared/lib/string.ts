export function upperCase<String extends string>(str: String): Uppercase<String> {
    return str.toUpperCase() as Uppercase<String>
}

type DashToUnderscore<String extends string> = String extends `${infer LeftPart}-${infer RightPart}`
    ? `${LeftPart}_${DashToUnderscore<RightPart>}`
    : String

export function replaceDashToUnderscore<String extends string>(str: String): DashToUnderscore<String> {
    return str.replaceAll('-', '_') as DashToUnderscore<String>
}
