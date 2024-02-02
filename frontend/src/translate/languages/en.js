const messages = {
	en: {
		translations: {
			signup: {
				title: "Sign up",
				toasts: {
					success: "User created successfully! Please login!",
					fail: "Error creating user. Check the reported data.",
				},
				form: {
					name: "Name",
					email: "Email",
					password: "Password",
				},
				buttons: {
					submit: "Register",
					login: "Already have an account? Log in!",
				},
			},
			login: {
				title: "Login",
				form: {
					email: "Email",
					password: "Password",
				},
				buttons: {
					submit: "Enter",
					register: "Don't have an account? Register!",
				},
			},
			plans: {
				form: {
				  name: "Name",
				  users: "Users",
				  connections: "Connections",
				  campaigns: "Campaigns",
				  schedules: "Schedules",
				  enabled: "Enabled",
				  disabled: "Disabled",
				  clear: "Clear",
				  delete: "Delete",
				  save: "Save",
				  yes: "Yes",
				  no: "No",
				  money: "R$",
				},
			  },
			  companies: {
				title: "Register Company",
				form: {
				  name: "Company Name",
				  plan: "Plan",
				  token: "Token",
				  submit: "Register",
				  success: "Company created successfully!",
				},
			  },			  
			auth: {
				toasts: {
					success: "Login successfully!",
				},
			},
			dashboard: {
				charts: {
				  perDay: {
					title: "Today's Attendances: ",
				  },
				  filters: {
					startDate: "Start Date",
					endDate: "End Date",
					periodText: "Period",
					periodOptions: {
					  input: "Select the desired period",
					  zero: "No period selected",
					  three: "Last three days",
					  seven: "Last seven days",
					  fifteen: "Last fifteen days",
					  thirty: "Last thirty days",
					  sixty: "Last sixty days",
					  ninety: "Last ninety days"
					},
					duedate: "Due Date",
					filtertype: {
					  title: "Filter Type",
					  valueA: "Date Filter",
					  valueB: "Period Filter",
					  helperText: "Select the desired period",
					},
				  },
				},
				cards: {
				  attdPendants: "Pending Attendances",
				  attdHappening: "Ongoing Attendances",
				  attdPerformed: "Completed Attendances",
				  leads: "Leads",
				  mtofService: "Avg. Service Time",
				  mtofwaiting: "Avg. Waiting Time",
				},
			},
			kanban: {
				inopen: "In Open",
			},
			todo: {
				newtask: "New Task",
				buttons: {
				  add: "Add",
				  edit: "Save",
				},
			},
			internalChat: {
				deletePrompt: "This action cannot be undone, confirm?",
			},			  
			connections: {
				title: "Connections",
				toasts: {
					deleted: "WhatsApp connection deleted sucessfully!",
				},
				confirmationModal: {
					deleteTitle: "Delete",
					deleteMessage: "Are you sure? It cannot be reverted.",
					disconnectTitle: "Disconnect",
					disconnectMessage: "Are you sure? You'll need to read QR Code again.",
				},
				buttons: {
					add: "Add WhatsApp",
					disconnect: "Disconnect",
					tryAgain: "Try Again",
					qrcode: "QR CODE",
					newQr: "New QR CODE",
					connecting: "Connectiing",
				},
				toolTips: {
					disconnected: {
						title: "Failed to start WhatsApp session",
						content:
							"Make sure your cell phone is connected to the internet and try again, or request a new QR Code",
					},
					qrcode: {
						title: "Waiting for QR Code read",
						content:
							"Click on 'QR CODE' button and read the QR Code with your cell phone to start session",
					},
					connected: {
						title: "Connection established",
					},
					timeout: {
						title: "Connection with cell phone has been lost",
						content:
							"Make sure your cell phone is connected to the internet and WhatsApp is open, or click on 'Disconnect' button to get a new QRcode",
					},
				},
				table: {
					name: "Name",
					status: "Status",
					lastUpdate: "Last Update",
					default: "Default",
					actions: "Actions",
					session: "Session",
				},
			},
			whatsappModal: {
				title: {
					add: "Add WhatsApp",
					edit: "Edit WhatsApp",
				},
				form: {
					name: "Name",
					default: "Default",
					sendIdQueue: "Queue",
					timeSendQueue: "Redirect to queue in X minutes",
					queueRedirection: "Queue Redirection",
					queueRedirectionDesc: "Select a queue for contacts without a queue to be redirected",
					prompt: "Prompt",
					maxUseBotQueues: "Send bot X times",
					timeUseBotQueues: "Interval in minutes between bot sends",
					expiresTicket: "Close open chats after X minutes",
					expiresInactiveMessage: "Inactive message closure",
				  },				  
				buttons: {
					okAdd: "Add",
					okEdit: "Save",
					cancel: "Cancel",
				},
				success: "WhatsApp saved successfully.",
			},
			qrCode: {
				message: "Read QrCode to start the session",
			},
			contacts: {
				title: "Contacts",
				toasts: {
					deleted: "Contact deleted sucessfully!",
				},
				searchPlaceholder: "Search ...",
				confirmationModal: {
					deleteTitle: "Delete",
					importTitlte: "Import contacts",
					deleteMessage:
						"Are you sure you want to delete this contact? All related tickets will be lost.",
					importMessage: "Do you want to import all contacts from the phone?",
				},
				buttons: {
					import: "Import Contacts",
					add: "Add Contact",
				},
				table: {
					name: "Name",
					whatsapp: "WhatsApp",
					email: "Email",
					actions: "Actions",
				},
			},
			queueIntegrationModal: {
				title: {
				  add: "Add Project",
				  edit: "Edit Project",
				},
				form: {
				  id: "ID",
				  type: "Type",
				  name: "Name",
				  projectName: "Project Name",
				  language: "Language",
				  jsonContent: "JsonContent",
				  urlN8N: "URL",
				  typebotSlug: "Typebot - Slug",
				  typebotExpires: "Time in minutes to expire a conversation",
				  typebotKeywordFinish: "Keyword to finish the ticket",
				  typebotKeywordRestart: "Keyword to restart the flow",
				  typebotRestartMessage: "Message when restarting the conversation",
				  typebotUnknownMessage: "Invalid option message",
				  typebotDelayMessage: "Interval (ms) between messages",
				},
				buttons: {
				  okAdd: "Add",
				  okEdit: "Save",
				  cancel: "Cancel",
				  test: "Test Bot",
				},
				messages: {
				  testSuccess: "Integration tested successfully!",
				  addSuccess: "Integration added successfully.",
				  editSuccess: "Integration edited successfully.",
				},
			  },
			  promptModal: {
				form: {
				  name: "Name",
				  prompt: "Prompt",
				  voice: "Voice",
				  max_tokens: "Maximum Tokens in the response",
				  temperature: "Temperature",
				  apikey: "API Key",
				  max_messages: "Maximum messages in the History",
				  voiceKey: "Voice API Key",
				  voiceRegion: "Voice Region",
				},
				success: "Prompt saved successfully!",
				title: {
				  add: "Add Prompt",
				  edit: "Edit Prompt",
				},
				buttons: {
				  okAdd: "Add",
				  okEdit: "Save",
				  cancel: "Cancel",
				},
			  },
			  prompts: {
				title: "Prompts",
				table: {
				  name: "Name",
				  queue: "Department/Queue",
				  max_tokens: "Maximum Tokens Response",
				  actions: "Actions",
				},
				confirmationModal: {
				  deleteTitle: "Delete",
				  deleteMessage: "Are you sure? This action cannot be undone!",
				},
				buttons: {
				  add: "Add Prompt",
				},
			  },			  
			  contactModal: {
				title: {
				  add: "Add Contact",
				  edit: "Edit Contact",
				},
				form: {
				  mainInfo: "Contact Information",
				  extraInfo: "Additional Information",
				  name: "Name",
				  number: "WhatsApp Number",
				  email: "Email",
				  extraName: "Field Name",
				  extraValue: "Value",
				  whatsapp: "Source Connection: "
				},
				buttons: {
				  addExtraInfo: "Add Information",
				  okAdd: "Add",
				  okEdit: "Save",
				  cancel: "Cancel",
				},
				success: "Contact saved successfully.",
			  },
			  queueModal: {
				title: {
				  add: "Add Queue",
				  edit: "Edit Queue",
				},
				form: {
				  name: "Name",
				  color: "Color",
				  greetingMessage: "Greeting Message",
				  complationMessage: "Completion Message",
				  outOfHoursMessage: "Out of Hours Message",
				  ratingMessage: "Rating Message",
				  token: "Token",
				  orderQueue: "Queue Order (Bot)",
				  integrationId: "Integration",
				},
				buttons: {
				  okAdd: "Add",
				  okEdit: "Save",
				  cancel: "Cancel",
				  attach: "Attach File",
				},
			  },
			  userModal: {
				title: {
				  add: "Add User",
				  edit: "Edit User",
				},
				form: {
				  name: "Name",
				  email: "Email",
				  password: "Password",
				  profile: "Profile",
				  whatsapp: "Default Connection",
				  startWork: "Start Time",
				  endWork: "End Time",
				},
				buttons: {
				  okAdd: "Add",
				  okEdit: "Save",
				  cancel: "Cancel",
				},
				success: "User saved successfully.",
			  },
			  scheduleModal: {
				title: {
				  add: "New Schedule",
				  edit: "Edit Schedule",
				},
				form: {
				  body: "Message",
				  contact: "Contact",
				  sendAt: "Scheduling Date",
				  sentAt: "Sent Date",
				},
				buttons: {
				  okAdd: "Add",
				  okEdit: "Save",
				  cancel: "Cancel",
				},
				success: "Schedule saved successfully.",
			  },
			  tagModal: {
				title: {
				  add: "New Tag",
				  edit: "Edit Tag",
				},
				form: {
				  name: "Name",
				  color: "Color",
				},
				buttons: {
				  okAdd: "Add",
				  okEdit: "Save",
				  cancel: "Cancel",
				},
				success: "Tag saved successfully.",
			  },
			  chat: {
				noTicketMessage: "Select a ticket to start a conversation.",
			  },
			  uploads: {
				titles: {
				  titleUploadMsgDragDrop: "DRAG AND DROP FILES IN THE FIELD BELOW",
				  titleFileList: "File(s) List"
				},
			  },
			  ticketsManager: {
				buttons: {
				  newTicket: "New",
				},
			  },
			  ticketsQueueSelect: {
				placeholder: "Queues",
			  },
			  tickets: {
				toasts: {
				  deleted: "The ticket you were on has been deleted.",
				},
				notification: {
				  message: "Message from",
				},
				tabs: {
				  open: { title: "Open" },
				  group: { title: "Groups" },
				  private: { title: "Private" },
				  closed: { title: "Resolved" },
				  search: { title: "Search" },
				},
				search: {
				  placeholder: "Search for ticket and messages",
				},
				buttons: {
				  showAll: "All",
				},
			  },			  
			transferTicketModal: {
				title: "Transfer Ticket",
				fieldLabel: "Type to search for users",
				noOptions: "No user found with this name",
				buttons: {
					ok: "Transfer",
					cancel: "Cancel",
				},
			},
			ticketsList: {
				pendingHeader: "Queue",
				assignedHeader: "Working on",
				noTicketsTitle: "Nothing here!",
				noTicketsMessage: "No tickets found with this status or search term.",
				buttons: {
					accept: "Accept",
				},
			},
			newTicketModal: {
				title: "Create Ticket",
				fieldLabel: "Type to search for a contact",
				add: "Add",
				buttons: {
					ok: "Save",
					cancel: "Cancel",
				},
			},
			mainDrawer: {
				listItems: {
				  dashboard: "Dashboard",
				  connections: "Connections",
				  tickets: "Tickets",
				  quickMessages: "Quick Responses",
				  contacts: "Contacts",
				  queues: "Queues & Chatbot",
				  tags: "Tags",
				  administration: "Administration",
				  users: "Users",
				  settings: "Settings",
				  helps: "Help",
				  messagesAPI: "API",
				  schedules: "Schedules",
				  campaigns: "Campaigns",
				  annoucements: "Announcements",
				  chats: "Internal Chat",
				  financeiro: "Financial",
				  files: "File List",
				  prompts: "Open.Ai",
				  queueIntegration: "Integrations",
				},
				appBar: {
				  user: {
					profile: "Profile",
					logout: "Logout",
				  },
				},
			  },
			  queueIntegration: {
				title: "Integrations",
				table: {
				  id: "ID",
				  type: "Type",
				  name: "Name",
				  projectName: "Project Name",
				  language: "Language",
				  lastUpdate: "Last Update",
				  actions: "Actions",
				},
				buttons: {
				  add: "Add Project",
				},
				searchPlaceholder: "Search...",
				confirmationModal: {
				  deleteTitle: "Delete",
				  deleteMessage:
					"Are you sure? This action cannot be undone! It will be removed from the associated queues and connections.",
				},
			  },
			  files: {
				title: "File List",
				table: {
				  name: "Name",
				  contacts: "Contacts",
				  actions: "Action",
				},
				toasts: {
				  deleted: "List deleted successfully!",
				  deletedAll: "All lists deleted successfully!",
				},
				buttons: {
				  add: "Add",
				  deleteAll: "Delete All",
				},
				confirmationModal: {
				  deleteTitle: "Delete",
				  deleteAllTitle: "Delete All",
				  deleteMessage: "Are you sure you want to delete this list?",
				  deleteAllMessage: "Are you sure you want to delete all lists?",
				},
			  },
			  messagesAPI: {
				title: "API",
				doc: "Documentation for message sending:",
				formMethod: "Sending Method:",
				textMessage: {
				  number: "Number",
				  body: "Message",
				  token: "Registered Token",
				},
				mediaMessage: {
				  number: "Number",
				  body: "File Name",
				  media: "File",
				  token: "Registered Token",
				},
				buttons: {
				  submit: "Send",
				},
				helpTexts: {
				  textMsg: {
					title: "Text Message",
					info: "Below is the list of information needed for sending text messages:",
					endpoint: "Endpoint: ",
					method: "Method: ",
					headers: "Headers: ",
					body: "Body: ",
				  },
				  test: "Send Test: ",
				  mediaMsg: {
					title: "Media Message",
					info: "Below is the list of information needed for sending media messages:",
					endpoint: "Endpoint: ",
					method: "Method: ",
					headers: "Headers: ",
					body: "Body: ",
					formData: "FormData: ",
				  },
				  instructions: "Instructions",
				  notes: {
					title: "Important Notes",
					textA: "Before sending messages, it is necessary to register the token linked to the connection that will send the messages. <br/>To register, access the 'Connections' menu, click the edit button of the connection, and enter the token in the appropriate field.",
					textB: {
					  title: "The number for sending must not have a mask or special characters and must be composed of:",
					  partA: "Country Code",
					  partB: "Area Code",
					  partC: "Number",
					},
				  },
				},
			  },
			  notifications: {
				noTickets: "No notifications.",
			  },
			  quickMessages: {
				title: "Quick Responses",
				searchPlaceholder: "Search...",
				noAttachment: "No attachment",
				confirmationModal: {
				  deleteTitle: "Deletion",
				  deleteMessage: "This action is irreversible! Do you want to proceed?",
				},
				buttons: {
				  add: "Add",
				  attach: "Attach File",
				  cancel: "Cancel",
				  edit: "Edit",
				},
				toasts: {
				  success: "Shortcut added successfully!",
				  deleted: "Shortcut removed successfully!",
				},
				dialog: {
				  title: "Quick Message",
				  shortcode: "Shortcut",
				  message: "Response",
				  save: "Save",
				  cancel: "Cancel",
				  geral: "Allow editing",
				  add: "Add",
				  edit: "Edit",
				  visao: "Allow viewing",
				},
				table: {
				  shortcode: "Shortcut",
				  message: "Message",
				  actions: "Actions",
				  mediaName: "File Name",
				  status: "Status",
				},
			  },
			  messageVariablesPicker: {
				label: "Available Variables",
				vars: {
				  contactFirstName: "First Name",
				  contactName: "Name",
				  greeting: "Greeting",
				  protocolNumber: "Protocol",
				  date: "Date",
				  hour: "Hour",
				},
			  },
			  contactLists: {
				title: "Contact Lists",
				table: {
				  name: "Name",
				  contacts: "Contacts",
				  actions: "Actions",
				},
				buttons: {
				  add: "New List",
				},
				dialog: {
				  name: "Name",
				  company: "Company",
				  okEdit: "Edit",
				  okAdd: "Add",
				  add: "Add",
				  edit: "Edit",
				  cancel: "Cancel",
				},
				confirmationModal: {
				  deleteTitle: "Delete",
				  deleteMessage: "This action cannot be undone.",
				},
				toasts: {
				  deleted: "Record deleted",
				},
			  },
			  contactListItems: {
				title: "Contacts",
				searchPlaceholder: "Search",
				buttons: {
				  add: "New",
				  lists: "Lists",
				  import: "Import",
				},
				dialog: {
				  name: "Name",
				  number: "Number",
				  whatsapp: "WhatsApp",
				  email: "Email",
				  okEdit: "Edit",
				  okAdd: "Add",
				  add: "Add",
				  edit: "Edit",
				  cancel: "Cancel",
				},
				table: {
				  name: "Name",
				  number: "Number",
				  whatsapp: "WhatsApp",
				  email: "Email",
				  actions: "Actions",
				},
				confirmationModal: {
				  deleteTitle: "Delete",
				  deleteMessage: "This action cannot be undone.",
				  importMessage: "Do you want to import the contacts from this spreadsheet? ",
				  importTitlte: "Import",
				},
				toasts: {
				  deleted: "Record deleted",
				},
			  },
			  campaigns: {
				title: "Campaigns",
				searchPlaceholder: "Search",
				buttons: {
				  add: "New Campaign",
				  contactLists: "Contact Lists",
				},
				table: {
				  name: "Name",
				  whatsapp: "Connection",
				  contactList: "Contact List",
				  status: "Status",
				  scheduledAt: "Scheduling",
				  completedAt: "Completed",
				  confirmation: "Confirmation",
				  actions: "Actions",
				},
				dialog: {
				  new: "New Campaign",
				  update: "Edit Campaign",
				  readonly: "View Only",
				  form: {
					name: "Name",
					message1: "Message 1",
					message2: "Message 2",
					message3: "Message 3",
					message4: "Message 4",
					message5: "Message 5",
					confirmationMessage1: "Confirmation Message 1",
					confirmationMessage2: "Confirmation Message 2",
					confirmationMessage3: "Confirmation Message 3",
					confirmationMessage4: "Confirmation Message 4",
					confirmationMessage5: "Confirmation Message 5",
					messagePlaceholder: "Message content",
					whatsapp: "Connection",
					status: "Status",
					scheduledAt: "Scheduling",
					confirmation: "Confirmation",
					contactList: "Contact List",
					tagList: "Tag List",
					fileList: "File List",
				  },
				  buttons: {
					add: "Add",
					edit: "Update",
					okadd: "Ok",
					cancel: "Cancel Campaigns",
					restart: "Restart Campaigns",
					close: "Close",
					attach: "Attach File",
				  },
				},
				confirmationModal: {
				  deleteTitle: "Delete",
				  deleteMessage: "This action cannot be undone.",
				},
				toasts: {
				  success: "Operation performed successfully",
				  cancel: "Campaign canceled",
				  restart: "Campaign restarted",
				  deleted: "Record deleted",
				},
			  },
			  announcements: {
				active: 'Active',
				inactive: 'Inactive',
				title: "Announcements",
				searchPlaceholder: "Search",
				buttons: {
				  add: "New Announcement",
				  contactLists: "Announcement Lists",
				},
				table: {
				  priority: "Priority",
				  title: "Title",
				  text: "Text",
				  mediaName: "File",
				  status: "Status",
				  actions: "Actions",
				},
				dialog: {
				  edit: "Announcement Editing",
				  add: "New Announcement",
				  update: "Edit Announcement",
				  readonly: "View Only",
				  form: {
					priority: "Priority",
					title: "Title",
					text: "Text",
					mediaPath: "File",
					status: "Status",
				  },
				  buttons: {
					add: "Add",
					edit: "Update",
					okadd: "Ok",
					cancel: "Cancel",
					close: "Close",
					attach: "Attach File",
				  },
				},
				confirmationModal: {
				  deleteTitle: "Delete",
				  deleteMessage: "This action cannot be undone.",
				},
				toasts: {
				  success: "Operation performed successfully",
				  deleted: "Record deleted",
				},
			  },
			  campaignsConfig: {
				title: "Campaigns Settings",
			  },
			  queues: {
				title: "Queues & Chatbot",
				table: {
				  name: "Name",
				  color: "Color",
				  greeting: "Greeting Message",
				  actions: "Actions",
				  orderQueue: "Queue Order (bot)",
				},
				buttons: {
				  add: "Add Queue",
				},
				confirmationModal: {
				  deleteTitle: "Delete",
				  deleteMessage:
					"Are you sure? This action cannot be undone! The tickets from this queue will continue to exist but will no longer have any assigned queue.",
				},
			  },
			  queueSelect: {
				inputLabel: "Queues",
			  },
			  users: {
				title: "Users",
				table: {
				  name: "Name",
				  email: "Email",
				  profile: "Profile",
				  actions: "Actions",
				  startWork: "Start Time",
				  endWork: "End Time",
				},
				buttons: {
				  add: "Add User",
				},
				toasts: {
				  deleted: "User deleted successfully.",
				},
				confirmationModal: {
				  deleteTitle: "Delete",
				  deleteMessage:
					"All user data will be lost. The open tickets from this user will be moved to the queue.",
				},
			  },
			  helps: {
				title: "Help Center",
			  },
			  schedules: {
				title: "Schedules",
				confirmationModal: {
				  deleteTitle: "Are you sure you want to delete this Schedule?",
				  deleteMessage: "This action cannot be undone.",
				},
				table: {
				  contact: "Contact",
				  body: "Message",
				  sendAt: "Scheduling Date",
				  sentAt: "Sent Date",
				  status: "Status",
				  actions: "Actions",
				},
				calendar: {
				  date: "Date",
				  time: "Time",
				  event: "Event",
				  allDay: "All Day",
				  week: "Week",
				  work_week: "Schedules",
				  day: "Day",
				  month: "Month",
				  previous: "Previous",
				  next: "Next",
				  yesterday: "Yesterday",
				  tomorrow: "Tomorrow",
				  today: "Today",
				  agenda: "Agenda",
				  noEventsInRange: "No schedules in the period.",
				},
				buttons: {
				  add: "New Schedule",
				},
				toasts: {
				  deleted: "Schedule deleted successfully.",
				},
			  },
			  tags: {
				title: "Tags",
				confirmationModal: {
				  deleteTitle: "Are you sure you want to delete this Tag?",
				  deleteMessage: "This action cannot be undone.",
				},
				table: {
				  name: "Name",
				  color: "Color",
				  tickets: "Tagged Records",
				  actions: "Actions",
				},
				buttons: {
				  add: "New Tag",
				},
				toasts: {
				  deleted: "Tag deleted successfully.",
				},
			  },settings: {
				success: "Settings saved successfully.",
				title: "Settings",
				settings: {
				  userCreation: {
					name: "User Creation",
					options: {
					  enabled: "Enabled",
					  disabled: "Disabled",
					},
				  },
				  tabs: {
					options: "Options",
					schedules: "Schedules",
					companies: "Companies",
					plans: "Plans",
					helps: "Help",
				  },
				},
			  },
			  messagesList: {
				header: {
				  assignedTo: "Assigned to:",
				  buttons: {
					return: "Return",
					resolve: "Resolve",
					reopen: "Reopen",
					accept: "Accept",
				  },
				},
			  },
			  messagesInput: {
				placeholderOpen: "Type a message",
				placeholderClosed: "Reopen or accept this ticket to send a message.",
				signMessage: "Sign",
			  },
			  contactDrawer: {
				header: "Contact Information",
				buttons: {
				  edit: "Edit contact",
				},
				extraInfo: "Other information",
			  },
			  fileModal: {
				title: {
				  add: "Add file list",
				  edit: "Edit file list",
				},
				buttons: {
				  okAdd: "Save",
				  okEdit: "Edit",
				  cancel: "Cancel",
				  fileOptions: "Add file",
				},
				form: {
				  name: "File list name",
				  message: "List details",
				  fileOptions: "File list",
				  extraName: "Message to send with file",
				  extraValue: "Option value",
				},
				success: "File list saved successfully!",
			  },
			  ticketOptionsMenu: {
				schedule: "Schedule",
				delete: "Delete",
				transfer: "Transfer",
				registerAppointment: "Contact Observations",
				appointmentsModal: {
				  title: "Contact Observations",
				  textarea: "Observation",
				  placeholder: "Enter the information you want to record here",
				},
				confirmationModal: {
				  title: "Delete contact ticket",
				  message: "Attention! All messages related to the ticket will be lost.",
				},
				buttons: {
				  delete: "Delete",
				  cancel: "Cancel",
				},
			  },
			  confirmationModal: {
				buttons: {
				  confirm: "Ok",
				  cancel: "Cancel",
				},
			  },
			  messageOptionsMenu: {
				delete: "Delete",
				reply: "Reply",
				confirmationModal: {
				  title: "Delete message?",
				  message: "This action cannot be undone.",
				},
			  },
			  backendErrors: {
				ERR_NO_OTHER_WHATSAPP: "There must be at least one default WhatsApp.",
				ERR_NO_DEF_WAPP_FOUND: "No default WhatsApp found. Check the connections page.",
				ERR_WAPP_NOT_INITIALIZED: "This WhatsApp session has not been initialized. Check the connections page.",
				ERR_WAPP_CHECK_CONTACT: "Could not check WhatsApp contact. Check the connections page.",
				ERR_WAPP_INVALID_CONTACT: "This is not a valid WhatsApp number.",
				ERR_WAPP_DOWNLOAD_MEDIA: "Could not download media from WhatsApp. Check the connections page.",
				ERR_INVALID_CREDENTIALS: "Authentication error. Please try again.",
				ERR_SENDING_WAPP_MSG: "Error sending WhatsApp message. Check the connections page.",
				ERR_DELETE_WAPP_MSG: "Could not delete WhatsApp message.",
				ERR_OTHER_OPEN_TICKET: "There is already an open ticket for this contact.",
				ERR_SESSION_EXPIRED: "Session expired. Please log in.",
				ERR_USER_CREATION_DISABLED: "User creation is disabled by the administrator.",
				ERR_NO_PERMISSION: "You do not have permission to access this resource.",
				ERR_DUPLICATED_CONTACT: "A contact with this number already exists.",
				ERR_NO_SETTING_FOUND: "No setting found with this ID.",
				ERR_NO_CONTACT_FOUND: "No contact found with this ID.",
				ERR_NO_TICKET_FOUND: "No ticket found with this ID.",
				ERR_NO_USER_FOUND: "No user found with this ID.",
				ERR_NO_WAPP_FOUND: "No WhatsApp found with this ID.",
				ERR_CREATING_MESSAGE: "Error creating message in the database.",
				ERR_CREATING_TICKET: "Error creating ticket in the database.",
				ERR_FETCH_WAPP_MSG: "Error fetching message from WhatsApp, it may be too old.",
				ERR_QUEUE_COLOR_ALREADY_EXISTS: "This color is already in use, please choose another one.",
				ERR_WAPP_GREETING_REQUIRED: "Greeting message is mandatory when there is more than one queue.",
			},
		},
	},  
};

export { messages };
