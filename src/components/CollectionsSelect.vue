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
                    v-model="collection"
                    @change="updateValue"
                    v-bind="$attrs"
                    class="form-control"
                    :class="[{'is-valid': valid === true}, {'input-group-alternative': alternative},
                     {'is-invalid': valid === false}, inputClasses]"
                    aria-describedby="addon-right addon-left">

                <option v-for="collection in collections" :value="collection.value">{{collection.text}}</option>
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
    import {getCollectionsByLanguage} from "../utils";

    export default {
        inheritAttrs: false,
        name: "collections-select",
        props: {
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
                focused: false,
                collection: 'terms',
                language: 'en',
                collections: []
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
            refreshCollections() {
                this.collections = getCollectionsByLanguage(this.language);
            },
            updateValue() {
                let value = this.collection;
                console.log("updating collection selected " + value);
                Bus.$emit("new-collection", value);
            },
        },
        mounted() {
            Bus.$on('new-collections', function (newLanguage) {
                this.language = newLanguage;
                this.refreshCollections();
                this.collection = 'terms';
                this.updateValue();
            }.bind(this));

            this.refreshCollections();
        }
    };
</script>
<style>
</style>
