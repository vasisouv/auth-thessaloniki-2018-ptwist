<template>
    <div class="form-group"
         :class="[
       {'input-group': hasIcon},
       {'has-danger': error},
       {'focused': focused},
       {'has-label': label || $slots.label},
       {'has-success': valid === true},
       {'has-danger': valid === false}
       ]">
        <small class="d-block text-uppercase font-weight-bold mb-3">{{label}}</small>


        <div v-if="addonLeftIcon || $slots.addonLeft" class="input-group-prepend">
        <span class="input-group-text">
          <slot name="addonLeft">
            <i :class="addonLeftIcon"></i>
          </slot>
        </span>
        </div>
        <slot v-bind="slotData">

            <select
                    v-on="listeners"
                    v-bind="$attrs"
                    class="form-control"
                    :class="[{'is-valid': valid === true}, {'input-group-alternative': alternative},
                     {'is-invalid': valid === false}, inputClasses]"
                    aria-describedby="addon-right addon-left">

                <option v-for="option in options" :value="option.value">{{option.text}}</option>
            </select>
        </slot>
        <div v-if="addonRightIcon || $slots.addonRight" class="input-group-append">
          <span class="input-group-text">
              <slot name="addonRight">
                  <i :class="addonRightIcon"></i>
              </slot>
          </span>
        </div>
        <slot name="infoBlock"></slot>
        <slot name="helpBlock">
            <div class="text-danger invalid-feedback" style="display: block;" :class="{'mt-2': hasIcon}" v-if="error">
                {{ error }}
            </div>
        </slot>
    </div>
</template>
<script>

    import {Bus} from "../bus";

    export default {
        inheritAttrs: false,
        name: "base-select",
        props: {
            options: {
                type: Array,
                description: "Select options"
            },
            required: {
                type: Boolean,
                description: "Whether input is required (adds an asterix *)"
            },
            valid: {
                type: Boolean,
                description: "Whether is valid",
                default: undefined
            },
            alternative: {
                type: Boolean,
                description: "Whether input is of alternative layout"
            },
            label: {
                type: String,
                description: "Input label (text before input)"
            },
            error: {
                type: String,
                description: "Input error (below input)"
            },
            labelClasses: {
                type: String,
                description: "Input label css classes"
            },
            inputClasses: {
                type: String,
                description: "Input css classes"
            },
            value: {
                type: [String, Number],
                description: "Input value"
            },
            addonRightIcon: {
                type: String,
                description: "Addon right icon"
            },
            addonLeftIcon: {
                type: String,
                description: "Addont left icon"
            }
        },
        data() {
            return {
                focused: false
            };
        },
        computed: {
            listeners() {
                return {
                    ...this.$listeners,
                    input: this.updateValue,
                    focus: this.onFocus,
                    blur: this.onBlur
                };
            },
            slotData() {
                return {
                    focused: this.focused,
                    ...this.listeners
                };
            },
            hasIcon() {
                const {addonRight, addonLeft} = this.$slots;
                return (
                    addonRight !== undefined ||
                    addonLeft !== undefined ||
                    this.addonRightIcon !== undefined ||
                    this.addonLeftIcon !== undefined
                );
            }
        },
        methods: {
            updateValue(evt) {
                let value = evt.target.value;
                Bus.$emit("select", value);
            },
            onFocus(value) {
                this.focused = true;
                this.$emit("focus", value);
            },
            onBlur(value) {
                this.focused = false;
                this.$emit("blur", value);
            }
        }
    };
</script>
<style>
</style>
