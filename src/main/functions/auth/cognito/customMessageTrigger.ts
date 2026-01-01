import { CustomMessageTriggerEvent } from 'aws-lambda';
import { render } from '@react-email/render';
import ForgotPassword from '@infra/emails/templates/ForgotPassword';

export async function handler(event: CustomMessageTriggerEvent) {
  if (event.triggerSource === 'CustomMessage_ForgotPassword') {
    const confirmationCode = event.request.codeParameter;

    await render(ForgotPassword({ confirmationCode }));

    event.response.emailSubject = 'foodiary | Recupere a sua conta!';
    event.response.emailMessage = `O seu código de recuperação é: ${code}`;
  }

  return event;
}
