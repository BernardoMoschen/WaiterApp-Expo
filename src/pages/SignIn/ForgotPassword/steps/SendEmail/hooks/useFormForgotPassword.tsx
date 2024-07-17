import { useForm } from 'react-hook-form'
import { env } from '@/config/env'
import { useSetRecoilState, forgotPasswordAtom } from '@/pages/SignIn/recoil'
import { useRequestPost } from '@/utils/api'

type FormData = {
  email: string
}

export const useFormForgotPassword = () => {
  const form = useForm<FormData>({ mode: 'onBlur' })
  const { request, isLoading, error } = useRequestPost()
  const setForgotPassword = useSetRecoilState(forgotPasswordAtom)

  const sendTempPasswd = async ({ email }: FormData) => {
    await request({
      url: `${env.midtier.url}/cognito/resend-password`,
      data: {
        email,
      },
    })
    setForgotPassword({ email, code: '' })
  }

  return {
    form,
    formFacade: {
      handleSubmit: form.handleSubmit(sendTempPasswd),
      isSubmitSuccessful: !error && form.formState.isSubmitSuccessful,
    },
    request: {
      isLoading,
      errors: {
        request: error,
      },
    },
    sendTempPasswd,
  }
}
