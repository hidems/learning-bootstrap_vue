<template>
  <div>
    <h1>Multiple Checkbox</h1>
    <b-form-group class="mt-2">
      <b-input-group prepend="Text">
        <b-form-input></b-form-input>
      </b-input-group>
    </b-form-group>

    <b-form-group class="mt-5">
      <b-input-group prepend="Checkbox">
        <b-form-checkbox>Option 1</b-form-checkbox>
      </b-input-group>
    </b-form-group>

    <b-form-group class="mt-5">
      <b-input-group prepend="Checkbox">
        <template>
          <b-form-checkbox>Option 1</b-form-checkbox>
          <b-form-checkbox>Option 2</b-form-checkbox>
          <b-form-checkbox>Option 3</b-form-checkbox>
        </template>
      </b-input-group>
    </b-form-group>

    <b-form-group class="mt-5">
      <b-input-group prepend="Checkbox">
        <b-col>
          <b-form-group>
            <template>
              <b-form-checkbox>Option 1</b-form-checkbox>
              <b-form-checkbox>Option 2</b-form-checkbox>
              <b-form-checkbox>Option 3</b-form-checkbox>
            </template>
            <b-form-checkbox-group>
              <b-form-checkbox value="orange">Orange</b-form-checkbox>
              <b-form-checkbox value="apple">Apple</b-form-checkbox>
              <b-form-checkbox value="pineapple">Pineapple</b-form-checkbox>
              <b-form-checkbox value="grape">Grape</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
        </b-col>
      </b-input-group>
    </b-form-group>
  </div>
</template>

<style scoped>
/* Class for b-form-checkbox */
.custom-checkbox {
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  padding: 0.375rem;
  margin-right: 0.5rem;
}
.custom-checkbox:focus,
.custom-checkbox:active {
  outline: 2px solid #86b7fe;
}
</style>
