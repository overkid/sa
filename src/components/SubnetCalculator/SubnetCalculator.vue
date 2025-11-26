<template>
  <div :class="$style.wrapper">
    <UiField label="IP адрес">
      <UiInput v-model="ip" placeholder="192.168.1.150" />
    </UiField>

    <UiField label="Маска подсети">
      <UiSelect v-model="mask" :options="maskOptions" />
    </UiField>

    <UiButton layout="primary" :disabled="!isValid" @click="onCalculate"> Рассчитать </UiButton>

    <div v-if="result" :class="$style.result">
      <p><strong>IP:</strong> {{ result.ip }}</p>
      <p><strong>Маска:</strong> {{ result.mask }}</p>
      <p><strong>Адрес сети:</strong> {{ result.network }}</p>
      <p><strong>Кол-во адресов:</strong> {{ result.count }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

import { UiButton, UiField, UiInput, UiSelect } from 'mikhail-uikit-is422k';

import { MASK_OPTIONS } from './options';
import { isIpValid } from './isIpValid';
import { getNetworkAddress } from './getNetworkAddress';
import { getAddressesCount } from './getAddressesCount';

const ip = ref('');
const mask = ref(MASK_OPTIONS[24]); // 24/255.255.255.0

const maskOptions = MASK_OPTIONS.map((m) => m);

const isValid = computed(() => isIpValid(ip.value));

const result = ref<null | {
  ip: string;
  mask: string;
  network: string;
  count: number;
}>(null);

function onCalculate() {
  // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars, sonarjs/no-unused-vars
  const [_, dottedMask] = mask.value.split('/');

  result.value = {
    ip: ip.value,
    mask: dottedMask,
    network: getNetworkAddress(ip.value, dottedMask),
    count: getAddressesCount(dottedMask),
  };
}
</script>

<style module lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
}

.result {
  margin-top: 20px;
  padding: 16px;
  border-radius: 12px;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
}
</style>
