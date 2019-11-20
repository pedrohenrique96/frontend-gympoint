export function addPlanRequest(data) {
  return {
    type: '@plan/PLAN_ADD_REQUEST',
    payload: { data },
  };
}

export function studentFailure() {
  return {
    type: '@plan/PLAN_FAILURE',
  };
}

export function updatePlanRequest(data, id) {
  return {
    type: '@plan/PLAN_UPDATE_REQUEST',
    payload: { data, id },
  };
}

export function deletePlanRequest(id, title) {
  return {
    type: '@plan/PLAN_DEL_REQUEST',
    payload: { id, title },
  };
}
