export default {
  general: {
    messageErrorTitle: 'Ошибка!',
    messageErrorFatal: 'Фатальная ошибка, продолжение работы невозможно!',
    loading: 'Загрузка...',
    buttonSave: 'Сохранить',
    addNewNote: 'Создать запись',
    addNewNotebook: 'Добавить блокнот',
    buttonSettings: 'Настройки',
    buttonExit: 'Выключить',
    sidebarLibrary: 'LIBRARY',
    sidebarInbox: 'Inbox',
    sidebarFavorites: 'Favorite',
    sidebarTrash: 'Trash',
    sidebarAllNotes: 'All Notes',
    sidebarNotebooks: 'NOTEBOOKS',
    sidebarTags: 'TAGS',
    sidebarSettings: 'SETTINGS',
    sidebarSettingsGeneral: 'Основные',
    sidebarSettingsNotebooks: 'Блокноты',
    sidebarSettingsTags: 'Теги',
    sidebarSwitchNotebooks: 'Блокноты',
    sidebarSwitchTags: 'Теги',
    modalNewNotebookTitle: 'Новый блокнот',
    modalNewNotebookText: 'Название блокнота:',
    modalNewNotebookBtnAdd: 'Добавить',
    modalNewNotebookBtnCancel: 'Отмена',
    messageCanNotAddNewNotebook: 'Ошибка создания нового блокнота...',
    messageErrorDownloadNotesWithTag: 'Ошибка загрузки списка заметок для выбранного тегом...',
    messageErrorDownloadNotesList: 'Ошибка загрузки списка заметок для выбранного блокнота...',
    messageErrorDownloadConfiguration: 'Ошибка загрузки конфигурации...',
    yes: 'да',
    no: 'нет',
    yesBig: 'Да',
    noBig: 'Нет',
    modalClose: 'Закрыть'
  },
  installer: {
    title: 'QVNote - установка',
    selectDataFolder: 'Укажите папку с данными',
    sourceFolderCreateIfNotExist: 'Создать папку, если отсутствует'
  },
  editor: {
    titleNew: 'Создание заметки',
    titleExist: 'Редактирование заметки',
    inputTitlePlaceholder: 'Заголовок записи...',
    titleURL: 'Ссылка',
    inputURLPlaceholder: 'Добавьте ссылку тут...',
    titleTags: 'Теги',
    inputTagsPlaceholder: 'Поиск или добавление тега',
    multiselectLang: {
      selectLabel: 'Нажмите для выбора',
      deselectLabel: 'Нажмите для удаление',
      selectedLabel: 'Выбрано'
    },
    errorSave: 'Ошибка при сохранении заметки...'
  },
  setting: {
    global: {
      settingsTitle: 'Основные настройки',
      folder: 'Директория с данными',
      switchOpenBrowser: 'открывать браузера при старте',
      switchCheckNew: 'поиск новых заметок при запуске (медленно)',
      switchShowConsole: 'показывать консоль при запуске',
      actionsTitle: 'Действия',
      requestIndexing: 'Необходима переиндексация',
      btnRefreshData: 'обновить список заметок',
      btnIndexChanges: 'индексировать изменения',
      btnFullReload: 'полная переиндексация (очень долго)',
      btnDownloadImages: 'оптимизация хранилища',
      downloadWarnLine1: 'Все внешние картинки будут скачаны, потерянные ресурсы удалены.',
      downloadWarnLine2: 'Рекомендуется сделать резервную копию всей базы.',
      msgIndexing: 'Выполняется индексация данных ({0} из {1})',
      msgSearchNewData: 'Поиск новых данных...',
      msgSearchComplete: 'Индексация успешно завершена!',
      msgOptimizationStatus: 'Выполняется обработка данных ({0} из {1})',
      msgOptimizationComplete: 'Обработка успешно завершена!',
      notificationErrorGetSearchStatus: 'Ошибка получения статуса поиска...',
      notificationAddDataRefreshed: 'Данные успешно обновлены...',
      editor: 'Редактор'
    },
    notebooks: {
      title: 'Управление блокнотами',
      tips: 'Нажмите для изменения',
      modalTitle: 'Выбран блокнот',
      modalNewTitle: 'Новое название',
      modalBtnDelete: 'Удалить',
      statusErrorDelete: 'Ошибка удаления блокнота...',
      modalBtnCancel: 'Отмена',
      modalBtnSave: 'Сохранить',
      statusErrorUpdate: 'Ошибка обновления заголовка блокнота...'
    },
    tags: {
      title: 'Управление тегами',
      tips: 'Нажмите для изменения',
      modalTitle: 'Выбран тег',
      modalNewTitle: 'Новое название',
      modalBtnDelete: 'Удалить',
      statusErrorDelete: 'Ошибка удаления тега...',
      modalBtnCancel: 'Отмена',
      modalBtnSave: 'Сохранить',
      statusErrorUpdate: 'Ошибка обновления имени тега...'
    }
  },
  articleList: {
    searchPlaceholder: 'Поиск....',
    searchNothing: 'Ничего не найдено :(',
    btnInfo: 'Подробности',
    btnEdit: 'Изменить',
    btnDelete: 'Удалить',
    btnMove: 'Переместить',
    infoDateCreate: 'Дата создание',
    infoDateModify: 'Дата редактирование',
    infoTags: 'Теги',
    modalDeleteTitle: 'Удалить заметку?',
    modalMoveTitle: 'Переместить заметку',
    modalMoveNotebook: 'Новый блокнот',
    modalMoveBtnCancel: 'Отмена',
    modalMoveBtnMove: 'Переместить',
    notificationErrorMove: 'Ошибка при перемещении заметки...',
    btnFavorites: 'добавить в избранное',
    btnReaderMode: 'режим чтения'

  },
  dashboard: {
    infoTitle: 'Статистика',
    infoTotalNotebooks: 'Всего блокнотов',
    infoTotalNotes: 'Всего записей',
    infoTotalTags: 'Всего тегов',
    infoFirstNote: 'Первая запись',
    infoLastChanges: 'Последние изменения',
    infoSearchIndexSize: 'Размер поискового индекса',
    tagsPieTitle: 'Количество тегов на запись',
    activityTitle: 'Активность',
    activityGraph: {
      months: ['янв', 'фев', 'мар', 'апр', 'май', 'июнь', 'июль', 'авг', 'сен', 'окт', 'ноя', 'дек'],
      days: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      less: 'Less',
      more: 'More',
      on: 'on',
      tooltipUnit: 'notes'
    },
    errorDownloadingStatistic: 'Ошибка загрузки статистики...'

  }
}
