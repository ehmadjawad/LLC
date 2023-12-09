// NotificationService.js
import PushNotification from 'react-native-push-notification';

export const scheduleNotification = (medicineName, medicineTime) => {
  const notificationDate = new Date(medicineTime);

  // Check if the date is valid
  if (isNaN(notificationDate.getTime())) {
    console.error('Invalid date:', medicineTime);
    return;
  }

  PushNotification.localNotificationSchedule(
    {
      channelId: 'medication_reminder_channel', // Unique Channel ID
      channelName: 'Medication Reminders', // Channel name
      channelDescription: 'Receive notifications for your medication schedule', // Channel description
      playSound: true, // Whether to play a sound for notifications posted to this channel
      soundName: 'default', // Sound to play for notifications
      importance: 4, // Importance level (0-4)
      vibrate: true, // Whether to vibrate for notifications posted to this channel
    },
    (created) => console.log(`Channel created: ${created}`),
  );
  
  // Use the created channel in your notification schedule
  PushNotification.localNotificationSchedule({
    channelId: 'medication_reminder_channel', // Use the same channel ID
    title: 'Medication Reminder',
    message: `It's time to take your medication!`,
    date: new Date(medicineTime),
  });
};