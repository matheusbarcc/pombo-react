import { api } from '@/lib/axios'

export interface UpdateComplaintParams {
  complaintId: string
  newStatus: string
}

export async function updateComplaintStatus({
  complaintId,
  newStatus,
}: UpdateComplaintParams) {
  await api.patch(`/complaint/admin/update-status/${complaintId}/${newStatus}`)
}
