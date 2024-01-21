/**
 * Should not be used with optional inputs as it can lead to some rendering issues. <br />
 * No:
 * ```
 * @Input()
 * @DefaultValue()
 * example?: string;
 * ```
 * Yes:
 * ```
 * @Input()
 * example?: string;
 * ```
 * */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DefaultValue = (
    {
      value,
      useFirstValueAsDefault,
    }: { value?: any; useFirstValueAsDefault: boolean } = {
      useFirstValueAsDefault: true,
    },
  ): ((target: Object, propertyKey: string) => void) => {
    let defaultValue = value;
  
    return (target, propertyKey) => {
      Object.defineProperty(target, propertyKey, {
        get() {
          return this[`_${propertyKey}`] === undefined
            ? defaultValue
            : this[`_${propertyKey}`];
        },
        set(value: any) {
          if (useFirstValueAsDefault && defaultValue === undefined) {
            defaultValue = value;
          }
          this[`_${propertyKey}`] = value;
        },
      });
    };
  };