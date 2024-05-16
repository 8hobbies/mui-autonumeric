/** @license Apache-2.0
 *
 * Copyright 2024 8 Hobbies, LLC <hong@8hobbies.com>
 *
 * Licensed under the Apache License, Version 2.0(the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AutoNumericMUIInputBase } from "./AutoNumericMUIInputBase.js";
import type { CallbackOptions } from "autonumeric";
import { TextField } from "@mui/material";

type InputProps = Omit<Parameters<typeof TextField>[0], "inputRef">;

export function AutoNumericTextField({
  textFieldProps,
  autoNumericOptions,
  valueState,
}: {
  textFieldProps?: Readonly<InputProps>;
  autoNumericOptions?: Readonly<CallbackOptions>;
  valueState?: {
    state: Readonly<string>;
    stateSetter: React.Dispatch<React.SetStateAction<string>>;
  };
}): JSX.Element {
  return (
    <AutoNumericMUIInputBase
      comp={TextField}
      props={textFieldProps}
      autoNumericOptions={autoNumericOptions}
      valueState={valueState}
    />
  );
}
