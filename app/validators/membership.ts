import vine from '@vinejs/vine'

export const membershipSubscribeValidator = vine.compile(
  vine.object({
    membership_id: vine.number()
  })
)
