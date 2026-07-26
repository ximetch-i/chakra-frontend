import axios from "axios";
import type {
  ApiResponse,
  EvaluationRequest,
  EvaluationResponse,
} from "../types";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-Type": "application/json" },
});

export async function createEvaluation(
  request: EvaluationRequest
): Promise<EvaluationResponse> {
  const { data } = await api.post<ApiResponse<EvaluationResponse>>(
    "/evaluations",
    request
  );
  if (!data.success) {
    throw new Error(data.message);
  }
  return data.data;
}
