/**
 * Created by changrui on 15/12/16.
 */

module Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}