// Professional SVG Favicon / Icon System
    const ICONS = {
      bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
      shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
      trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H7v2h10v-2h-2c-.55 0-1-.45-1-1v-2.34c3.27-.8 5-3.66 5-6.66V4H5v4c0 3 1.73 5.86 5 6.66z"/></svg>',
      key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>',
      lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
      user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
      users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>',
      check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
      alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>',
      alertTriangle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>',
      clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
      book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>',
      settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',
      trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',
      plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>',
      chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>',
      play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>',
      refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>',
      dice: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="8" cy="8" r="1.5" fill="currentColor"/><circle cx="16" cy="8" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="8" cy="16" r="1.5" fill="currentColor"/><circle cx="16" cy="16" r="1.5" fill="currentColor"/></svg>',
      save: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>',
      arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
      arrowLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" x2="5" y1="12" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
      eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
      eyeOff: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>',
      medalGold: '<svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
      medalSilver: '<svg viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
      medalBronze: '<svg viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
      crown: '<svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>',
      target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>'
    };

    function icon(name, customClass = '') {
      return `<span class="svg-icon ${customClass}">${ICONS[name] || ''}</span>`;
    }
    // Default Battle Arena Quizzes
    const DEFAULT_QUIZZES = [
      {
        id: 'quiz-web-dev-8942',
        code: 'BB-8942',
        title: 'Full-Stack Web Dev Speed Battle',
        description: 'Test your mastery of modern JavaScript, React concurrency, CSS Grid, backend protocols, and system design.',
        category: 'Full-Stack & Web Dev',
        timerPerQuestion: 20,
        pointsPerQuestion: 100,
        speedBonusEnabled: true,
        status: 'lobby',
        currentQuestionIndex: 0,
        createdAt: Date.now() - 3600000,
        questions: [
          {
            id: 'q-1',
            questionText: 'What will be the output of `typeof NaN` in standard JavaScript (ECMAScript)?',
            options: ['"undefined"', '"number"', '"NaN"', '"object"'],
            correctAnswerIndex: 1,
            explanation: 'In JavaScript, NaN is formally a numeric data type value defined in IEEE 754.',
            category: 'JavaScript'
          },
          {
            id: 'q-2',
            questionText: 'Which HTTP status code is most appropriate when a rate limit is exceeded by a client?',
            options: ['400 Bad Request', '403 Forbidden', '429 Too Many Requests', '503 Service Unavailable'],
            correctAnswerIndex: 2,
            explanation: 'HTTP 429 Too Many Requests indicates rate limiting.',
            category: 'HTTP & APIs'
          },
          {
            id: 'q-3',
            questionText: 'In React 18+, which hook is specifically designed to defer updating a non-urgent part of the UI?',
            options: ['useDeferredValue', 'useImperativeHandle', 'useLayoutEffect', 'useInsertionEffect'],
            correctAnswerIndex: 0,
            explanation: 'useDeferredValue defers non-urgent updates without blocking urgent user inputs.',
            category: 'React'
          },
          {
            id: 'q-4',
            questionText: 'What is the average time complexity of searching for a key in a well-distributed Hash Table?',
            options: ['O(n)', 'O(log n)', 'O(1)', 'O(n log n)'],
            correctAnswerIndex: 2,
            explanation: 'Hash tables offer constant average time O(1) for lookup and insertion.',
            category: 'Data Structures'
          },
          {
            id: 'q-5',
            questionText: 'Which CSS property enables hardware-accelerated 3D composition without layout reflows?',
            options: ['transform: translateZ(0)', 'float: left', 'display: block', 'position: static'],
            correctAnswerIndex: 0,
            explanation: 'Transform and opacity properties are handled directly by GPU compositor layers.',
            category: 'CSS & Performance'
          },
          {
            id: 'q-6',
            questionText: 'In Git, what does the command `git cherry-pick <commit-hash>` do?',
            options: [
              'Deletes the specified commit from history',
              'Applies the changes from an existing commit onto the current branch',
              'Merges two remote branches unconditionally',
              'Reverts all unstaged working directory changes'
            ],
            correctAnswerIndex: 1,
            explanation: '`git cherry-pick` applies the delta introduced by a specific commit onto the current branch.',
            category: 'DevOps & Tools'
          }
        ]
      },
      {
        id: 'quiz-cs-algorithms-4421',
        code: 'BB-4421',
        title: 'Algorithms, OS & Systems Showdown',
        description: 'Deep dive into memory management, concurrency, binary trees, sorting networks, and operating system primitives.',
        category: 'Computer Science & OS',
        timerPerQuestion: 25,
        pointsPerQuestion: 100,
        speedBonusEnabled: true,
        status: 'draft',
        currentQuestionIndex: 0,
        createdAt: Date.now() - 7200000,
        questions: [
          {
            id: 'q-algo-1',
            questionText: 'Which condition is NOT one of the 4 necessary Coffman conditions for a deadlock in an OS?',
            options: ['Mutual Exclusion', 'Hold and Wait', 'Preemption Allowed', 'Circular Wait'],
            correctAnswerIndex: 2,
            explanation: 'Deadlock requires NO PREEMPTION. Preemption allowed prevents deadlocks.',
            category: 'Operating Systems'
          },
          {
            id: 'q-algo-2',
            questionText: 'What is the worst-case time complexity of QuickSort?',
            options: ['O(n log n)', 'O(n²)', 'O(n)', 'O(2ⁿ)'],
            correctAnswerIndex: 1,
            explanation: 'When pivot selection yields unbalanced partitions, QuickSort degrades to O(n²).',
            category: 'Algorithms'
          }
        ]
      }
    ];

    const STORAGE_KEYS = {
      QUIZZES: 'byte_battle_quizzes_v5',
      ACTIVE_CODE: 'byte_battle_active_code_v5',
      PARTICIPANTS: 'byte_battle_participants_v5',
      ADMIN_AUTH: 'byte_battle_admin_auth_v5',
      CURRENT_USER_ID: 'byte_battle_user_id_v5'
    };

    const supabaseClient = window.supabase &&
      window.BYTE_BATTLE_SUPABASE_URL &&
      window.BYTE_BATTLE_SUPABASE_ANON_KEY &&
      !window.BYTE_BATTLE_SUPABASE_URL.includes('YOUR-PROJECT-REF') &&
      !window.BYTE_BATTLE_SUPABASE_ANON_KEY.includes('YOUR-SUPABASE-ANON-KEY')
      ? window.supabase.createClient(window.BYTE_BATTLE_SUPABASE_URL, window.BYTE_BATTLE_SUPABASE_ANON_KEY)
      : null;

    function quizToRow(quiz) {
      return {
        id: quiz.id,
        code: quiz.code,
        title: quiz.title,
        description: quiz.description || '',
        category: quiz.category || 'General Engineering',
        timer_per_question: quiz.timerPerQuestion || 20,
        points_per_question: quiz.pointsPerQuestion || 100,
        speed_bonus_enabled: quiz.speedBonusEnabled !== false,
        status: quiz.status || 'lobby',
        current_question_index: quiz.currentQuestionIndex || 0,
        created_at: quiz.createdAt || Date.now(),
        questions: quiz.questions || []
      };
    }

    function rowToQuiz(row) {
      return {
        id: row.id,
        code: row.code,
        title: row.title,
        description: row.description,
        category: row.category,
        timerPerQuestion: row.timer_per_question,
        pointsPerQuestion: row.points_per_question,
        speedBonusEnabled: row.speed_bonus_enabled,
        status: row.status,
        currentQuestionIndex: row.current_question_index,
        createdAt: row.created_at,
        questions: row.questions || []
      };
    }

    function participantToRow(participant) {
      return {
        id: participant.id,
        quiz_code: participant.quizCode,
        name: participant.name,
        college_name: participant.collegeName || '',
        department: participant.department || '',
        joined_at: participant.joinedAt || Date.now(),
        status: participant.status || 'waiting',
        score: participant.score || 0,
        correct_count: participant.correctCount || 0,
        total_time_taken_seconds: participant.totalTimeTakenSeconds || 0,
        answers: participant.answers || [],
        disqualification_reason: participant.disqualificationReason || null,
        disqualified_at: participant.disqualifiedAt || null
      };
    }

    function rowToParticipant(row) {
      return {
        id: row.id,
        quizCode: row.quiz_code,
        name: row.name,
        collegeName: row.college_name,
        department: row.department,
        joinedAt: row.joined_at,
        status: row.status,
        score: row.score,
        correctCount: row.correct_count,
        totalTimeTakenSeconds: row.total_time_taken_seconds,
        answers: row.answers || [],
        disqualificationReason: row.disqualification_reason || undefined,
        disqualifiedAt: row.disqualified_at || undefined
      };
    }

    function loadQuizzes() {
      try {
        const raw = localStorage.getItem(STORAGE_KEYS.QUIZZES);
        if (raw) return JSON.parse(raw);
      } catch (e) {}
      saveQuizzes(DEFAULT_QUIZZES);
      return DEFAULT_QUIZZES;
    }

    function saveQuizzes(quizzes) {
      localStorage.setItem(STORAGE_KEYS.QUIZZES, JSON.stringify(quizzes));
      broadcastMessage('QUIZZES_UPDATED');
      if (supabaseClient) {
        supabaseClient.from('quizzes').upsert(quizzes.map(quizToRow)).then(({ error }) => {
          if (error) console.error('Supabase quiz sync failed:', error.message);
        });
      }
    }

    function loadParticipants() {
      try {
        const raw = localStorage.getItem(STORAGE_KEYS.PARTICIPANTS);
        if (raw) return JSON.parse(raw);
      } catch (e) {}
      return [];
    }

    function saveParticipants(participants) {
      localStorage.setItem(STORAGE_KEYS.PARTICIPANTS, JSON.stringify(participants));
      if (supabaseClient) {
        supabaseClient.from('participants').upsert(participants.map(participantToRow)).then(({ error }) => {
          if (error) console.error('Supabase participant sync failed:', error.message);
        });
      }
    }

    function saveParticipantRecord(participant) {
      const latestParticipants = loadParticipants();
      const mergedParticipants = [
        ...latestParticipants.filter(item => item.id !== participant.id),
        participant
      ];
      state.participants = [
        ...state.participants.filter(item => item.id !== participant.id),
        participant
      ];
      localStorage.setItem(STORAGE_KEYS.PARTICIPANTS, JSON.stringify(mergedParticipants));
      if (supabaseClient) {
        supabaseClient.from('participants').upsert(participantToRow(participant)).then(({ error }) => {
          if (error) console.error('Supabase participant sync failed:', error.message);
        });
      }
    }

    async function deleteParticipantsForQuiz(quizCode) {
      if (!supabaseClient) return;
      const { error } = await supabaseClient.from('participants').delete().eq('quiz_code', quizCode);
      if (error) console.error('Supabase participant reset failed:', error.message);
    }

    // BroadcastChannel Sync
    let syncChannel = null;
    try {
      syncChannel = new BroadcastChannel('byte_battle_v5_sync');
    } catch (e) {}

    function broadcastMessage(type, payload) {
      if (syncChannel) {
        try {
          syncChannel.postMessage({ type, payload, timestamp: Date.now() });
        } catch (e) {}
      }
    }

    async function initializeSupabaseSync() {
      if (!supabaseClient) return;

      const [{ data: remoteQuizzes, error: quizError }, { data: remoteParticipants, error: participantError }] = await Promise.all([
        supabaseClient.from('quizzes').select('*').order('created_at', { ascending: false }),
        supabaseClient.from('participants').select('*').order('joined_at', { ascending: true })
      ]);

      if (quizError || participantError) {
        console.error('Supabase connection failed:', quizError?.message || participantError?.message);
        return;
      }

      if (remoteQuizzes?.length) {
        state.quizzes = remoteQuizzes.map(rowToQuiz);
        localStorage.setItem(STORAGE_KEYS.QUIZZES, JSON.stringify(state.quizzes));
      } else {
        await supabaseClient.from('quizzes').upsert(state.quizzes.map(quizToRow));
      }

      if (remoteParticipants?.length) {
        state.participants = remoteParticipants.map(rowToParticipant);
        localStorage.setItem(STORAGE_KEYS.PARTICIPANTS, JSON.stringify(state.participants));
      }

      state.activeQuizCode = localStorage.getItem(STORAGE_KEYS.ACTIVE_CODE) || state.quizzes[0]?.code || 'BB-8942';
      state.selectedQuiz = state.quizzes.find(q => q.code === state.activeQuizCode) || state.quizzes[0];
      if (state.currentParticipant) {
        state.currentParticipant = state.participants.find(p => p.id === state.currentParticipant.id) || state.currentParticipant;
        state.selectedQuiz = state.quizzes.find(q => q.code === state.currentParticipant.quizCode) || state.selectedQuiz;
      }
      renderApp();

      supabaseClient.channel('byte-battle-live')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'quizzes' }, (payload) => {
          const changedQuiz = payload.new ? rowToQuiz(payload.new) : null;
          if (payload.eventType === 'DELETE') {
            state.quizzes = state.quizzes.filter(q => q.id !== payload.old.id);
          } else if (changedQuiz) {
            state.quizzes = [changedQuiz, ...state.quizzes.filter(q => q.id !== changedQuiz.id)];
          }
          localStorage.setItem(STORAGE_KEYS.QUIZZES, JSON.stringify(state.quizzes));
          state.selectedQuiz = state.quizzes.find(q => q.code === state.currentParticipant?.quizCode) || state.selectedQuiz;
          if (syncStudentQuizState()) return;
          const shouldCelebrateResults = changedQuiz?.status === 'results_revealed' &&
            ((state.currentView === 'admin') || state.studentStep === 'leaderboard');
          renderApp();
          if (shouldCelebrateResults) setTimeout(() => triggerConfetti(5000), 250);
        })
        .on('postgres_changes', { event: '*', schema: 'public', table: 'participants' }, (payload) => {
          const changedParticipant = payload.new ? rowToParticipant(payload.new) : null;
          if (payload.eventType === 'DELETE') {
            state.participants = state.participants.filter(p => p.id !== payload.old.id);
            if (state.currentParticipant?.id === payload.old.id) {
              clearIntervalTimer();
              state.currentParticipant = null;
              localStorage.removeItem(STORAGE_KEYS.CURRENT_USER_ID);
              state.studentStep = 'code_portal';
            }
          } else if (changedParticipant) {
            state.participants = [changedParticipant, ...state.participants.filter(p => p.id !== changedParticipant.id)];
            if (state.currentParticipant?.id === changedParticipant.id) {
              state.currentParticipant = changedParticipant;
              if (changedParticipant.status === 'disqualified') {
                clearIntervalTimer();
                state.studentStep = 'disqualified';
              }
            }
          }
          localStorage.setItem(STORAGE_KEYS.PARTICIPANTS, JSON.stringify(state.participants));
          syncStudentQuizState();
          renderApp();
        })
        .subscribe();
    }

    // Confetti Engine
    function triggerConfetti(durationMs = 3500) {
      const canvas = document.createElement('canvas');
      canvas.id = 'byte-battle-confetti-canvas';
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '99999';
      document.body.appendChild(canvas);

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);

      const colors = ['#fbbf24', '#f59e0b', '#06b6d4', '#6366f1', '#10b981', '#ffffff', '#f43f5e', '#e879f9'];
      const particleCount = 140;
      const particles = [];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: window.innerWidth * (0.15 + Math.random() * 0.7),
          y: window.innerHeight * 0.35,
          w: 7 + Math.random() * 9,
          h: 5 + Math.random() * 7,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: (Math.random() - 0.5) * 18,
          vy: -12 - Math.random() * 14,
          rotation: Math.random() * 360,
          vRot: (Math.random() - 0.5) * 12,
          opacity: 1
        });
      }

      const startTime = Date.now();
      function render() {
        if (!ctx) return;
        const elapsed = Date.now() - startTime;
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        let activeCount = 0;
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.45;
          p.vx *= 0.98;
          p.rotation += p.vRot;

          if (elapsed > durationMs - 1000) {
            p.opacity = Math.max(0, (durationMs - elapsed) / 1000);
          }

          if (p.opacity > 0 && p.y < window.innerHeight + 50) {
            activeCount++;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.globalAlpha = p.opacity;
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
          }
        }

        if (elapsed < durationMs && activeCount > 0) {
          requestAnimationFrame(render);
        } else {
          if (document.body.contains(canvas)) {
            document.body.removeChild(canvas);
          }
        }
      }
      requestAnimationFrame(render);
    }

    // App State
    const state = {
      currentView: 'student',
      studentStep: 'code_portal',
      isAdminLoggedIn: false,
      isRulesModalOpen: false,
      isAddQuestionModalOpen: false,
      quizzes: loadQuizzes(),
      activeQuizCode: localStorage.getItem(STORAGE_KEYS.ACTIVE_CODE) || 'BB-8942',
      selectedQuiz: null,
      currentParticipant: null,
      participants: loadParticipants(),
      currentQuestionIndex: 0,
      selectedOptionIndex: null,
      questionReadyForNext: false,
      isAdvancingQuestion: false,
      secondsRemaining: 20,
      questionTimerInterval: null,
      adminView: 'quizzes_list',
      scoreboardReturnView: 'quiz_inside_manage',
      scoreboardDisplayMode: 'live_table',
      managingQuizId: 'quiz-web-dev-8942',
      newQuizCode: '',
      newQuizTitle: '',
      newQuizCategory: 'Full-Stack & Web Dev',
      newQuizTimer: 20,
      newQuizPoints: 100,
      fullscreenWarningMessage: '',
      fullscreenWarningTimeout: null,
      newQuestions: [
        {
          id: 'q-custom-1',
          questionText: 'What is the output of 2 + "2" in JavaScript?',
          options: ['4', '"22"', 'NaN', 'TypeError'],
          correctAnswerIndex: 1,
          explanation: 'The + operator performs string concatenation when one operand is a string.',
          category: 'JavaScript'
        }
      ]
    };

    state.selectedQuiz = state.quizzes.find(q => q.code === state.activeQuizCode) || state.quizzes[0];
    state.managingQuizId = state.selectedQuiz ? state.selectedQuiz.id : (state.quizzes[0] ? state.quizzes[0].id : '');

    const savedParticipantId = localStorage.getItem(STORAGE_KEYS.CURRENT_USER_ID);
    state.currentParticipant = state.participants.find(p => p.id === savedParticipantId) || null;
    if (state.currentParticipant) {
      state.selectedQuiz = state.quizzes.find(q => q.code === state.currentParticipant.quizCode) || state.selectedQuiz;
      state.activeQuizCode = state.selectedQuiz?.code || state.activeQuizCode;
      if (state.currentParticipant.status === 'disqualified') {
        state.studentStep = 'disqualified';
      } else if (state.selectedQuiz?.status === 'active') {
        state.studentStep = 'active_quiz';
        state.currentQuestionIndex = Math.min(
          state.currentParticipant.answers?.length || 0,
          Math.max(0, (state.selectedQuiz.questions?.length || 1) - 1)
        );
      } else if (state.selectedQuiz?.status === 'results_revealed') {
        state.studentStep = 'leaderboard';
      } else {
        state.studentStep = 'waiting_room';
      }
    }

    window.setInterval(() => {
      if (state.currentView !== 'student' || !state.currentParticipant) return;
      const previousStatus = state.selectedQuiz?.status;
      state.quizzes = loadQuizzes();
      state.participants = loadParticipants();
      syncStudentQuizState();
      refreshQuestionReadiness();
      const joinedQuiz = state.quizzes.find(q => q.code === state.currentParticipant.quizCode);
      if (!joinedQuiz) return;

      if (joinedQuiz.status === 'lobby' && previousStatus === 'active' && state.studentStep !== 'leaderboard') {
        clearIntervalTimer();
        state.selectedQuiz = joinedQuiz;
        state.studentStep = 'waiting_room';
        renderApp();
      }
    }, 1000);

    // Anti-Cheat: Tab-Switch Sensor
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && state.currentView === 'student' && state.studentStep === 'active_quiz') {
        disqualifyCurrentParticipant('Tab Switch / Window minimized detected during live battle');
      }
    });

    document.addEventListener('fullscreenchange', handleFullscreenExitDetection);
    document.addEventListener('webkitfullscreenchange', handleFullscreenExitDetection);
    document.addEventListener('mozfullscreenchange', handleFullscreenExitDetection);
    document.addEventListener('MSFullscreenChange', handleFullscreenExitDetection);

    document.addEventListener('pointerdown', () => {
      if (state.currentView === 'student' && state.studentStep === 'active_quiz') {
        requestFullscreenForCurrentStudent();
      }
    }, { passive: true });

    // Multi-Tab Sync listener
    if (syncChannel) {
      syncChannel.onmessage = (event) => {
        handleSyncMessage(event.data);
      };
    }

    window.addEventListener('storage', (event) => {
      if (event.key === STORAGE_KEYS.QUIZZES || event.key === STORAGE_KEYS.PARTICIPANTS || event.key === STORAGE_KEYS.ACTIVE_CODE) {
        state.quizzes = loadQuizzes();
        state.participants = loadParticipants();
        state.activeQuizCode = localStorage.getItem(STORAGE_KEYS.ACTIVE_CODE) || 'BB-8942';
        if (state.selectedQuiz) {
          state.selectedQuiz = state.quizzes.find(q => q.id === state.selectedQuiz?.id) || state.selectedQuiz;
        }

        if (syncStudentQuizState()) return;

        refreshQuestionReadiness();

        if (state.currentView === 'student' && ['active_quiz', 'waiting_for_next_question', 'waiting_for_results', 'waiting_room'].includes(state.studentStep) && state.selectedQuiz?.status === 'results_revealed') {
          clearIntervalTimer();
          state.studentStep = 'leaderboard';
          renderApp();
          setTimeout(() => triggerConfetti(3500), 300);
          return;
        }

        renderApp();
      }
    });

    function handleSyncMessage(data) {
      state.quizzes = loadQuizzes();
      state.participants = loadParticipants();

      if (data.type === 'QUIZ_SETTINGS_UPDATED' && data.payload?.codeChanged) {
        if (state.currentParticipant && state.currentParticipant.quizCode === data.payload.oldCode) {
          state.currentParticipant.quizCode = data.payload.newCode;
        }
        if (state.activeQuizCode === data.payload.oldCode) {
          state.activeQuizCode = data.payload.newCode;
        }
      }

      if (state.selectedQuiz) {
        state.selectedQuiz = state.quizzes.find(q => q.id === state.selectedQuiz?.id) || state.selectedQuiz;
      }

      syncStudentQuizState();

      if (data.type === 'START_QUIZ' && state.studentStep === 'waiting_room') {
        if (data.payload?.quizCode === state.selectedQuiz?.code) {
          startQuizForStudent();
          return;
        }
      }

      if (data.type === 'STOP_QUIZ' && data.payload?.quizCode === state.selectedQuiz?.code) {
        clearIntervalTimer();
        state.studentStep = 'waiting_room';
        renderApp();
        return;
      }

      if (data.type === 'QUESTION_ADVANCE' && state.currentParticipant) {
        if (data.payload?.quizCode === state.selectedQuiz?.code && ['active_quiz', 'waiting_for_next_question'].includes(state.studentStep)) {
          advanceStudentToQuestion(data.payload.questionIndex);
          return;
        }
      }

      if (data.type === 'PARTICIPANT_ANSWERED') {
        refreshQuestionReadiness();
        return;
      }

      if (data.type === 'PARTICIPANT_DISQUALIFIED' && data.payload?.id === state.currentParticipant?.id) {
        clearIntervalTimer();
        state.currentParticipant = data.payload;
        state.studentStep = 'disqualified';
        renderApp();
        return;
      }

      if (data.type === 'SHOW_RESULTS') {
        if (data.payload?.quizCode === state.selectedQuiz?.code) {
          if (['active_quiz', 'waiting_for_next_question', 'waiting_for_results', 'waiting_room'].includes(state.studentStep)) {
            clearIntervalTimer();
            state.studentStep = 'leaderboard';
            renderApp();
            setTimeout(() => triggerConfetti(4000), 300);
            return;
          }
        }
      }

      if (data.type === 'RESET_SESSION') {
        if (data.payload?.quizCode === state.selectedQuiz?.code) {
          clearIntervalTimer();
          state.currentParticipant = null;
          localStorage.removeItem(STORAGE_KEYS.CURRENT_USER_ID);
          state.selectedQuiz = state.quizzes.find(q => q.code === data.payload.quizCode) || state.selectedQuiz;
          state.studentStep = 'code_portal';
          renderApp();
          return;
        }
      }

      renderApp();
    }

    function syncStudentQuizState() {
      if (state.currentView !== 'student' || !state.currentParticipant) return false;

      const joinedQuiz = state.quizzes.find(q => q.code === state.currentParticipant.quizCode);
      if (!joinedQuiz) return false;
      state.selectedQuiz = joinedQuiz;

      const latestParticipant = state.participants.find(participant => participant.id === state.currentParticipant.id);
      if (latestParticipant?.status === 'disqualified' || state.currentParticipant.status === 'disqualified') {
        state.currentParticipant = latestParticipant || state.currentParticipant;
        clearIntervalTimer();
        if (state.studentStep !== 'disqualified') {
          state.studentStep = 'disqualified';
          renderApp();
        }
        return true;
      }

      if (joinedQuiz.status === 'lobby' && ['active_quiz', 'waiting_for_next_question', 'waiting_for_results', 'leaderboard'].includes(state.studentStep)) {
        clearIntervalTimer();
        state.studentStep = 'waiting_room';
        renderApp();
        return true;
      }

      if (joinedQuiz.status === 'active' && ['registration', 'waiting_room'].includes(state.studentStep)) {
        startQuizForStudent();
        return true;
      }

      if (joinedQuiz.status !== 'lobby' && ['code_portal', 'registration'].includes(state.studentStep)) {
        state.selectedQuiz = null;
        state.studentStep = 'code_portal';
        renderApp();
        return true;
      }

      return false;
    }

    function clearIntervalTimer() {
      if (state.questionTimerInterval !== null) {
        clearInterval(state.questionTimerInterval);
        state.questionTimerInterval = null;
      }
    }

    function showFullscreenWarning(message) {
      state.fullscreenWarningMessage = message;
      if (state.fullscreenWarningTimeout) {
        clearTimeout(state.fullscreenWarningTimeout);
      }
      renderApp();
      state.fullscreenWarningTimeout = setTimeout(() => {
        state.fullscreenWarningMessage = '';
        if (state.currentView === 'student' && state.studentStep === 'active_quiz') {
          renderApp();
        }
      }, 2800);
    }

    function requestFullscreenForCurrentStudent() {
      if (state.currentView !== 'student' || state.studentStep !== 'active_quiz' || !state.currentParticipant) return;

      const target = document.documentElement || document.body;
      if (!target) return;
      const isAlreadyFullscreen = !!document.fullscreenElement || !!document.webkitFullscreenElement || !!document.msFullscreenElement;
      if (isAlreadyFullscreen) return;

      const requestFS = target.requestFullscreen
        || target.webkitRequestFullscreen
        || target.msRequestFullscreen
        || document.body?.requestFullscreen
        || document.body?.webkitRequestFullscreen
        || document.body?.msRequestFullscreen;

      if (typeof requestFS === 'function') {
        requestFS.call(target).catch(() => {
          if (document.body && typeof document.body.requestFullscreen === 'function') {
            document.body.requestFullscreen().catch(() => {});
          }
        });
      }

      try {
        if (screen.orientation && typeof screen.orientation.lock === 'function') {
          screen.orientation.lock('landscape').catch(() => {});
        }
      } catch (error) {
        // Some mobile browsers reject orientation locking; this is optional and should not block the quiz.
      }
    }

    function handleFullscreenExitDetection() {
      const isActiveQuiz = state.currentView === 'student' && state.studentStep === 'active_quiz' && !!state.currentParticipant;
      const isFullscreen = !!document.fullscreenElement || !!document.webkitFullscreenElement || !!document.msFullscreenElement;

      if (isActiveQuiz && !isFullscreen) {
        state.fullscreenWarningMessage = 'You exited fullscreen. This quiz is now disabled for your account.';
        disqualifyCurrentParticipant('Fullscreen exited during live battle');
        alert('Warning: You exited fullscreen. You have been disqualified from this live quiz.');
      }
    }

    function handleCodeSubmit(code) {
      const clean = code.trim().toUpperCase();
      const matched = state.quizzes.find(q => q.code.toUpperCase() === clean);
      if (!matched) {
        alert(`Quiz code "${clean}" is invalid or does not exist. Please obtain the correct code from your competition administrator.`);
        return;
      }
      if (matched.status !== 'lobby') {
        alert(matched.status === 'active'
          ? 'This quiz has already started. New students cannot join now.'
          : 'This quiz is closed. Please ask the administrator for another quiz code.');
        return;
      }
      state.selectedQuiz = matched;
      state.activeQuizCode = matched.code;
      localStorage.setItem(STORAGE_KEYS.ACTIVE_CODE, matched.code);
      state.studentStep = 'registration';
      renderApp();
    }

    function handleRegistrationSubmit(name, college, department) {
      if (!name.trim() || !college.trim() || !department.trim()) {
        alert('Please fill out all registration fields.');
        return;
      }

      if (!state.selectedQuiz || state.selectedQuiz.status !== 'lobby') {
        alert('This quiz has already started or is closed. Please enter a different quiz code.');
        state.studentStep = 'code_portal';
        renderApp();
        return;
      }

      const participant = {
        id: `p-${Date.now()}`,
        name: name.trim(),
        collegeName: college.trim(),
        department: department.trim(),
        quizCode: state.selectedQuiz?.code || 'BB-8942',
        joinedAt: Date.now(),
        status: 'waiting',
        score: 0,
        correctCount: 0,
        totalTimeTakenSeconds: 0,
        answers: []
      };

      state.currentParticipant = participant;
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER_ID, participant.id);

      const updated = [...state.participants.filter(p => p.id !== participant.id), participant];
      state.participants = updated;
      saveParticipants(updated);
      broadcastMessage('PARTICIPANT_JOINED', participant);

      state.studentStep = 'waiting_room';
      renderApp();
    }

    function startQuizForStudent() {
      clearIntervalTimer();
      state.studentStep = 'active_quiz';
      state.currentQuestionIndex = 0;
      state.selectedOptionIndex = null;
      state.questionReadyForNext = false;
      state.isAdvancingQuestion = false;
      startQuestionTimer();
      setTimeout(() => requestFullscreenForCurrentStudent(), 250);
      renderApp();
    }

    function advanceStudentToQuestion(questionIndex) {
      const quiz = state.selectedQuiz;
      if (!quiz || questionIndex >= quiz.questions.length) return;

      clearIntervalTimer();
      state.studentStep = 'active_quiz';
      state.currentQuestionIndex = questionIndex;
      state.selectedOptionIndex = null;
      state.questionReadyForNext = false;
      state.isAdvancingQuestion = false;
      startQuestionTimer();
      renderApp();
    }

    function isCurrentQuestionAnswered() {
      const quiz = state.selectedQuiz;
      const participant = state.currentParticipant;
      if (!quiz || !participant) return false;
      const question = quiz.questions[state.currentQuestionIndex];
      return (participant.answers || []).some(answer => answer.questionId === question.id);
    }

    function refreshQuestionReadiness(timerFinished = false) {
      const quiz = state.selectedQuiz;
      if (!quiz || state.studentStep !== 'active_quiz' || !isCurrentQuestionAnswered()) return false;

      const quizParticipants = state.participants.filter(p => p.quizCode === quiz.code && p.status !== 'disqualified');
      const currentQuestion = quiz.questions[state.currentQuestionIndex];
      const everyoneAnswered = quizParticipants.length > 0 && quizParticipants.every(participant =>
        (participant.answers || []).some(answer => answer.questionId === currentQuestion.id)
      );

      if (everyoneAnswered || timerFinished) {
        state.questionReadyForNext = true;
        if (everyoneAnswered && !timerFinished && !state.isAdvancingQuestion) {
          moveToNextQuestionAfterTimeout();
        }
        renderApp();
        return true;
      }

      renderApp();
      return false;
    }

    function startQuestionTimer() {
      clearIntervalTimer();
      const quiz = state.selectedQuiz;
      if (!quiz) return;

      state.secondsRemaining = quiz.timerPerQuestion || 20;
      state.questionTimerInterval = window.setInterval(() => {
        state.secondsRemaining -= 1;
        updateTimerDOM();

        if (state.secondsRemaining <= 0) {
          clearIntervalTimer();
          if (isCurrentQuestionAnswered()) {
            moveToNextQuestionAfterTimeout();
          } else {
            handleOptionSubmit(true);
          }
        }
      }, 1000);
    }

    function updateTimerDOM() {
      const digits = document.getElementById('timer-digits');
      const fill = document.getElementById('timer-progress-fill');
      if (!digits || !fill || !state.selectedQuiz) return;

      const total = state.selectedQuiz.timerPerQuestion || 20;
      const pct = Math.max(0, (state.secondsRemaining / total) * 100);

      digits.textContent = `${state.secondsRemaining}s`;
      fill.style.width = `${pct}%`;

      if (state.secondsRemaining <= 5) {
        digits.className = 'countdown-digits urgent';
        fill.className = 'progress-fill urgent';
      } else if (state.secondsRemaining <= 10) {
        digits.className = 'countdown-digits warning';
        fill.className = 'progress-fill warning';
      } else {
        digits.className = 'countdown-digits';
        fill.className = 'progress-fill';
      }
    }

    function handleOptionSubmit(isAuto = false) {
      const quiz = state.selectedQuiz;
      if (!quiz || !state.currentParticipant) return;

      if (isCurrentQuestionAnswered()) return;

      if (isAuto) clearIntervalTimer();

      const question = quiz.questions[state.currentQuestionIndex];
      const selectedIdx = state.selectedOptionIndex !== null ? state.selectedOptionIndex : -1;
      const isCorrect = selectedIdx === question.correctAnswerIndex;
      
      const timeTaken = (quiz.timerPerQuestion || 20) - Math.max(0, state.secondsRemaining);
      let points = 0;
      if (isCorrect) {
        const base = quiz.pointsPerQuestion || 100;
        const speedRatio = Math.max(0, state.secondsRemaining / (quiz.timerPerQuestion || 20));
        const speedBonus = quiz.speedBonusEnabled ? Math.round(speedRatio * 50) : 0;
        points = base + speedBonus;
      }

      const answer = {
        questionId: question.id,
        selectedOptionIndex: selectedIdx,
        isCorrect,
        timeSpentSeconds: timeTaken,
        pointsEarned: points,
        answeredAt: Date.now()
      };

      const updatedAnswers = [...(state.currentParticipant.answers || []), answer];
      const updatedParticipant = {
        ...state.currentParticipant,
        score: state.currentParticipant.score + points,
        correctCount: state.currentParticipant.correctCount + (isCorrect ? 1 : 0),
        totalTimeTakenSeconds: state.currentParticipant.totalTimeTakenSeconds + timeTaken,
        status: state.currentQuestionIndex >= quiz.questions.length - 1 ? 'finished' : 'in_quiz',
        answers: updatedAnswers
      };

      state.currentParticipant = updatedParticipant;
      saveParticipantRecord(updatedParticipant);
      broadcastMessage('PARTICIPANT_ANSWERED', updatedParticipant);

      if (state.currentQuestionIndex >= quiz.questions.length - 1) {
        if (quiz.status === 'results_revealed') {
          state.studentStep = 'leaderboard';
          renderApp();
          setTimeout(() => triggerConfetti(), 300);
        } else {
          state.studentStep = 'waiting_for_results';
          renderApp();
        }
      } else {
        state.studentStep = 'active_quiz';
        renderApp();
        if (isAuto) {
          moveToNextQuestionAfterTimeout();
        } else {
          refreshQuestionReadiness(false);
        }
      }
    }

    function moveToNextQuestionAfterTimeout() {
      const quiz = state.selectedQuiz;
      if (!quiz) return;

      const nextQuestionIndex = state.currentQuestionIndex + 1;
      if (nextQuestionIndex >= quiz.questions.length) return;

      if (state.isAdvancingQuestion) return;
      state.isAdvancingQuestion = true;

      broadcastMessage('QUESTION_ADVANCE', { quizCode: quiz.code, questionIndex: nextQuestionIndex });
      advanceStudentToQuestion(nextQuestionIndex);
    }

    function disqualifyCurrentParticipant(reason) {
      if (!state.currentParticipant || state.currentParticipant.status === 'disqualified') return;
      clearIntervalTimer();

      const dq = {
        ...state.currentParticipant,
        status: 'disqualified',
        disqualificationReason: reason,
        disqualifiedAt: Date.now(),
        score: 0
      };

      state.currentParticipant = dq;
      const allUpdated = state.participants.map(p => p.id === dq.id ? dq : p);
      state.participants = allUpdated;
      saveParticipants(allUpdated);
      broadcastMessage('PARTICIPANT_DISQUALIFIED', dq);

      state.studentStep = 'disqualified';
      renderApp();
    }

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (state.currentView !== 'student' || state.studentStep !== 'active_quiz') return;
      const key = e.key.toUpperCase();
      let idx = -1;
      if (key === '1' || key === 'A') idx = 0;
      if (key === '2' || key === 'B') idx = 1;
      if (key === '3' || key === 'C') idx = 2;
      if (key === '4' || key === 'D') idx = 3;

      if (idx !== -1) {
        state.selectedOptionIndex = idx;
        const btns = document.querySelectorAll('.option-btn');
        btns.forEach((b, i) => {
          if (i === idx) b.classList.add('selected');
          else b.classList.remove('selected');
        });
        const submitBtn = document.getElementById('btn-submit-answer');
        if (submitBtn) submitBtn.disabled = false;
      }

      if (e.key === 'Enter' && state.selectedOptionIndex !== null) {
        handleOptionSubmit(false);
      }
    });

    // Admin Quiz Inside Actions
    function getManagingQuiz() {
      return state.quizzes.find(q => q.id === state.managingQuizId) || state.quizzes[0];
    }

    function startQuizInside(quizId) {
      const targetQuiz = state.quizzes.find(q => q.id === quizId);
      if (!targetQuiz) return;
      targetQuiz.status = 'active';
      targetQuiz.currentQuestionIndex = 0;
      state.quizzes = state.quizzes.map(q => q.id === targetQuiz.id ? targetQuiz : q);
      saveQuizzes(state.quizzes);
      state.selectedQuiz = targetQuiz;
      state.activeQuizCode = targetQuiz.code;
      localStorage.setItem(STORAGE_KEYS.ACTIVE_CODE, targetQuiz.code);
      broadcastMessage('START_QUIZ', { quizCode: targetQuiz.code });
      renderApp();
    }

    function stopQuizInside(quizId) {
      const targetQuiz = state.quizzes.find(q => q.id === quizId);
      if (!targetQuiz) return;

      targetQuiz.status = 'lobby';
      state.quizzes = state.quizzes.map(q => q.id === targetQuiz.id ? targetQuiz : q);
      saveQuizzes(state.quizzes);
      state.participants = state.participants.map(participant => participant.quizCode === targetQuiz.code
        ? { ...participant, status: 'waiting' }
        : participant);
      saveParticipants(state.participants);
      broadcastMessage('STOP_QUIZ', { quizCode: targetQuiz.code });
      renderApp();
    }

    function revealResultsInside(quizId) {
      const targetQuiz = state.quizzes.find(q => q.id === quizId);
      if (!targetQuiz) return;
      targetQuiz.status = 'results_revealed';
      state.quizzes = state.quizzes.map(q => q.id === targetQuiz.id ? targetQuiz : q);
      saveQuizzes(state.quizzes);
      broadcastMessage('SHOW_RESULTS', { quizCode: targetQuiz.code });
      if (state.currentView === 'admin') {
        state.scoreboardDisplayMode = 'podium';
        state.scoreboardReturnView = state.adminView === 'quizzes_list'
          ? 'quizzes_list'
          : 'quiz_inside_manage';
        state.adminView = 'live_scoreboard_page';
      }
      renderApp();
      setTimeout(() => triggerConfetti(5000), 250);
    }

    async function resetSessionInside(quizId) {
      const targetQuiz = state.quizzes.find(q => q.id === quizId);
      if (!targetQuiz) return;
      targetQuiz.status = 'lobby';
      targetQuiz.currentQuestionIndex = 0;
      state.quizzes = state.quizzes.map(q => q.id === targetQuiz.id ? targetQuiz : q);
      saveQuizzes(state.quizzes);

      state.participants = state.participants.filter(p => p.quizCode !== targetQuiz.code);
  localStorage.setItem(STORAGE_KEYS.PARTICIPANTS, JSON.stringify(state.participants));
  await deleteParticipantsForQuiz(targetQuiz.code);
      broadcastMessage('RESET_SESSION', { quizCode: targetQuiz.code });
      renderApp();
    }

    function deleteQuiz(quizId) {
      if (state.quizzes.length <= 1) {
        alert('You must keep at least one quiz in the system.');
        return;
      }
      if (!confirm('Are you sure you want to delete this quiz?')) return;
      state.quizzes = state.quizzes.filter(q => q.id !== quizId);
      saveQuizzes(state.quizzes);
      if (state.managingQuizId === quizId) {
        state.managingQuizId = state.quizzes[0].id;
        state.adminView = 'quizzes_list';
      }
      renderApp();
    }

    function deleteQuestionFromQuiz(quizId, questionId) {
      const quiz = state.quizzes.find(q => q.id === quizId);
      if (!quiz) return;
      if (quiz.questions.length <= 1) {
        alert('A quiz must have at least one question.');
        return;
      }
      quiz.questions = quiz.questions.filter(q => q.id !== questionId);
      saveQuizzes(state.quizzes);
      renderApp();
    }

    // Main App Render
    function renderApp() {
      const app = document.getElementById('app');
      let content = '';

      if (state.currentView === 'student') {
        switch (state.studentStep) {
          case 'code_portal': content = renderCodePortalHTML(); break;
          case 'registration': content = renderRegistrationHTML(); break;
          case 'waiting_room': content = renderWaitingRoomHTML(); break;
          case 'active_quiz': content = renderActiveQuizHTML(); break;
          case 'disqualified': content = renderDisqualifiedHTML(); break;
          case 'waiting_for_results': content = renderWaitingForResultsHTML(); break;
          case 'leaderboard': content = renderLeaderboardHTML(); break;
        }
      } else {
        content = !state.isAdminLoggedIn ? renderAdminLoginHTML() : renderAdminDashboardHTML();
      }

      app.innerHTML = `
        ${renderHeaderHTML()}
        <main class="main-content">${content}</main>
        ${state.isRulesModalOpen ? renderRulesModalHTML() : ''}
        ${state.isAddQuestionModalOpen ? renderAddQuestionModalHTML() : ''}
        ${renderFooterHTML()}
      `;

      document.querySelectorAll('#app button:not([type])').forEach(button => {
        button.type = 'button';
      });
      attachEventListeners();
    }

    function renderHeaderHTML() {
      const quiz = state.selectedQuiz;
      const participant = state.currentParticipant;
      const showQuizInHeader = quiz && (state.currentView !== 'student' || state.studentStep !== 'code_portal');
      const isTakingQuiz = state.currentView === 'student' && state.studentStep === 'active_quiz';

      // Minimal header while a student is actively answering questions —
      // just the logo and their live point total, so mobile screens keep
      // maximum room for the question itself.
      if (isTakingQuiz) {
        return `
          <header class="global-header global-header-minimal">
            <div class="header-container">
              <div class="brand-logo" id="header-brand-logo">
                <div class="logo-icon-box">${icon('bolt')}</div>
                <span class="brand-name font-mono">BYTE<span class="text-cyan">BATTLE</span></span>
              </div>
              ${participant ? `
                <div style="display:inline-flex; align-items:center; gap:8px; font-size:12px; background:#FFFFFF; padding:4px 10px; border-radius:8px; border:2px solid var(--border-color); color:#14201F;">
                  <span class="font-mono font-bold" style="color:#1E9C6B;">${participant.score} pts</span>
                </div>
              ` : ''}
            </div>
          </header>
        `;
      }

      return `
        <header class="global-header">
          <div class="header-container">
            <div class="brand-logo" id="header-brand-logo">
              <div class="logo-icon-box">${icon('bolt')}</div>
              <div>
                <span class="brand-name font-mono">BYTE<span class="text-cyan">BATTLE</span></span>
                <span class="badge-live">LIVE</span>
              </div>
            </div>

            ${showQuizInHeader ? `
              <div style="display:inline-flex; align-items:center; gap:8px; font-size:12px; background: #FFFFFF; padding: 4px 12px; border-radius: 999px; border: 2px solid var(--border-color);">
                <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:${quiz.status === 'active' ? 'var(--accent-emerald)' : 'var(--accent-cyan)'}; flex-shrink:0;"></span>
                <span class="font-mono truncate" style="max-width:180px; color:#14201F;">${quiz.title}</span>
                <span class="font-mono font-bold" style="background:#FFD35C; color:#14201F; padding:2px 8px; border-radius:4px; border:1.5px solid #14201F;">${quiz.code}</span>
              </div>
            ` : ''}

            <div class="header-actions">
              <button class="btn btn-secondary btn-sm" id="header-rules-btn" style="display:inline-flex; align-items:center; gap:6px;">
                ${icon('shield')} Rules
              </button>

              ${state.currentView === 'student' && participant ? `
                <div style="display:inline-flex; align-items:center; gap:8px; font-size:12px; background:#FFFFFF; padding:4px 10px; border-radius:8px; border:2px solid var(--border-color); color:#14201F;">
                  <span class="font-bold" style="color:#1A4348;">${participant.name}</span>
                  <span class="font-mono" style="color:#1E9C6B;">${participant.score} pts</span>
                </div>
              ` : ''}

              ${state.currentView === 'student' ? `
                <button class="btn btn-primary btn-sm" id="header-admin-portal-btn" style="display:inline-flex; align-items:center; gap:6px;">
                  ${icon('lock')} Admin Login
                </button>
              ` : `
                <button class="btn btn-secondary btn-sm" id="header-student-view-btn" style="display:inline-flex; align-items:center; gap:6px;">
                  ${icon('user')} Student Portal
                </button>
                ${state.isAdminLoggedIn ? `
                  <button class="btn btn-secondary btn-sm" id="header-admin-logout-btn" title="Logout" style="display:inline-flex; align-items:center; gap:6px;">
                    ${icon('logout')} Logout
                  </button>
                ` : ''}
              `}
            </div>
          </div>
        </header>
      `;
    }

    function renderCodePortalHTML() {
      return `
        <div class="portal-card-wrapper">
          <div class="portal-card text-center">
            <div class="portal-emblem-container">
              <div class="portal-emblem-glow"></div>
              <div class="portal-emblem-box">${icon('bolt', 'icon-lg')}</div>
            </div>

            <span class="portal-badge">
              <span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:var(--accent-cyan);"></span>
              Live Tournament Arena
            </span>

            <h2 style="font-size: 26px; margin-bottom: 6px; color:#14201F;">Multiplayer Quiz Portal</h2>
            <p class="text-secondary" style="font-size: 13px; margin-bottom: 24px; line-height:1.5;">
              Enter your access code to enter the live quiz session and compete on the real-time leaderboard.
            </p>

            <form id="code-portal-form">
              <div style="text-align: left; margin-bottom: 6px;">
                <label class="form-label" for="quiz-code-input">Quiz Access Code</label>
              </div>

              <div class="portal-input-wrap">
                <span class="portal-input-icon">${icon('key')}</span>
                <input
                  type="text"
                  id="quiz-code-input"
                  class="portal-input-field"
                  placeholder="Enter Access Code"
                  value=""
                  maxlength="20"
                  required
                  autocomplete="off"
                  autofocus
                />
              </div>

              <button type="submit" class="portal-enter-btn" id="btn-portal-enter">
                <span>Enter Arena</span>
                ${icon('arrowRight')}
              </button>
            </form>

            <div class="portal-features-grid">
              <div class="portal-feature-pill">
                ${icon('bolt', 'icon-sm')}
                <div>Real-Time Sync</div>
              </div>
              <div class="portal-feature-pill">
                ${icon('trophy', 'icon-sm')}
                <div>Live Podium</div>
              </div>
              <div class="portal-feature-pill">
                ${icon('shield', 'icon-sm')}
                <div>Anti-Cheat</div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function renderRegistrationHTML() {
      const quiz = state.selectedQuiz || state.quizzes[0];
      return `
        <div class="battle-card battle-card-sm">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
            <div>
              <span class="font-mono text-cyan" style="font-size:12px; font-weight:700;">QUIZ ${quiz.code}</span>
              <h2 style="font-size: 22px; margin-top:2px;">Student Registration</h2>
            </div>
            <button class="btn btn-secondary btn-sm" id="reg-back-btn">← Change Code</button>
          </div>

          <div class="notice-box notice-box-amber">
            <span class="notice-icon">${icon('shield', 'icon-md')}</span>
            <div>
              <strong>Anti-Cheat Active:</strong>
              <p style="margin-top: 2px; font-size: 11px; opacity: 0.9;">
                Switching browser tabs or minimizing this window will result in <strong>instant disqualification</strong>.
              </p>
            </div>
          </div>

          <form id="student-reg-form">
            <div class="form-group">
              <label class="form-label" for="reg-name">Your Name</label>
              <input type="text" id="reg-name" class="form-input" placeholder="e.g. Alex Chen" required />
            </div>

            <div class="form-group">
              <label class="form-label" for="reg-college">College / University</label>
              <input type="text" id="reg-college" class="form-input" placeholder="e.g. Stanford University" required />
            </div>

            <div class="form-group">
              <label class="form-label" for="reg-dept">Department</label>
              <input type="text" id="reg-dept" class="form-input" placeholder="e.g. Computer Science" required />
            </div>

            <button type="submit" class="btn btn-primary btn-block" style="padding: 12px; font-size: 14px; margin-top: 8px; display:flex; align-items:center; justify-content:center; gap:8px;">
              <span>Enter Lobby</span> ${icon('arrowRight')}
            </button>
          </form>
        </div>
      `;
    }

    function renderWaitingRoomHTML() {
      const quiz = state.selectedQuiz || state.quizzes[0];
      const participant = state.currentParticipant;
      const filteredParticipants = state.participants.filter(p => p.quizCode === quiz.code);

      return `
        <div class="battle-card battle-card-md text-center">
          <div class="pulse-indicator-wrapper">
            <div class="pulse-ring-outer"></div>
            <div class="pulse-ring-inner">${icon('bolt', 'icon-lg')}</div>
          </div>

          <h2 style="font-size: 26px; margin-bottom: 6px;">Quiz Lobby</h2>
          <p class="text-secondary" style="font-size: 14px; margin-bottom: 20px;">
            Waiting for the host to start the quiz. Get ready!
          </p>

          <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 24px; background: rgba(15,23,42,0.6); padding: 14px; border-radius: 12px; border: 1px solid var(--border-color);">
            <div>
              <span class="text-muted" style="font-size:11px; text-transform:uppercase;">Quiz Code</span>
              <p class="font-mono text-cyan font-bold" style="font-size:16px;">${quiz.code}</p>
            </div>
            <div>
              <span class="text-muted" style="font-size:11px; text-transform:uppercase;">Time / Question</span>
              <p class="font-mono text-amber font-bold" style="font-size:16px;">${quiz.timerPerQuestion}s</p>
            </div>
            <div>
              <span class="text-muted" style="font-size:11px; text-transform:uppercase;">Questions</span>
              <p class="font-mono text-emerald font-bold" style="font-size:16px;">${quiz.questions.length}</p>
            </div>
          </div>

          <div class="notice-box notice-box-amber" style="text-align: left;">
            <span class="notice-icon">${icon('shield', 'icon-md')}</span>
            <div>
              <strong>Anti-Cheat Active:</strong> Stay on this tab. Navigating away during the quiz will disqualify you.
            </div>
          </div>

          <div style="text-align: left; margin-top: 24px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
              <h4 style="font-size: 14px;">Connected Students (${filteredParticipants.length})</h4>
              <span class="badge-live">LIVE</span>
            </div>

            <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px; max-height: 180px; overflow-y: auto;">
              ${filteredParticipants.length === 0 ? `
                <p class="text-muted" style="font-size:12px; grid-column:1/-1; text-align:center; padding:16px;">You are the first student in this lobby!</p>
              ` : filteredParticipants.map(p => `
                <div style="background:rgba(15,23,42,0.8); border:1px solid var(--border-color); border-radius:8px; padding:10px; display:flex; align-items:center; gap:10px;">
                  <div style="width:32px; height:32px; border-radius:6px; background:linear-gradient(135deg, var(--accent-cyan), var(--accent-indigo)); display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:12px; flex-shrink:0;">
                    ${p.name.charAt(0)}
                  </div>
                  <div style="overflow:hidden;">
                    <p style="font-size:13px; font-weight:700; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                      ${p.name} ${p.id === participant?.id ? '<span class="text-cyan">(You)</span>' : ''}
                    </p>
                    <p class="text-muted truncate" style="font-size:11px;">${p.collegeName}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <button class="btn btn-secondary btn-block" id="btn-leave-waiting-room" style="margin-top:20px;">
            Leave Quiz
          </button>
        </div>
      `;
    }

    function renderActiveQuizHTML() {
      const quiz = state.selectedQuiz;
      if (!quiz) return '';

      const qIndex = state.currentQuestionIndex;
      const question = quiz.questions[qIndex];
      const totalQ = quiz.questions.length;
      const selectedIdx = state.selectedOptionIndex;
      const answerSubmitted = isCurrentQuestionAnswered();

      const fullscreenWarning = state.fullscreenWarningMessage ? `
        <div class="notice-box notice-box-red" style="margin-bottom: 16px; text-align: left;">
          <span class="notice-icon">${icon('alertTriangle', 'icon-md')}</span>
          <div>
            <strong>Fullscreen Warning</strong>
            <p style="margin-top: 2px; font-size: 11px; line-height: 1.4;">${state.fullscreenWarningMessage}</p>
          </div>
        </div>
      ` : '';

      return `
        <div class="battle-card battle-card-md">
          ${fullscreenWarning}
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 12px;">
            <div>
              <span class="font-mono text-cyan" style="font-size:11px; font-weight:700; text-transform:uppercase;">
                ${quiz.category} • ${quiz.code}
              </span>
              <h3 style="font-size:18px;">Question ${qIndex + 1} <span class="text-muted">of ${totalQ}</span></h3>
            </div>
            <div style="display:inline-flex; align-items:center; gap:6px; background:rgba(239,68,68,0.15); border:1px solid rgba(239,68,68,0.35); padding:4px 10px; border-radius:999px; font-size:11px; color:#fca5a5;">
              ${icon('shield', 'icon-sm')}
              <span style="font-weight:700;">Anti-Cheat Monitored</span>
            </div>
          </div>

          <div style="margin-bottom: 20px;">
            <div class="timer-header">
              <span class="text-secondary" style="font-size:12px; font-weight:700;">TIME REMAINING</span>
              <span id="timer-digits" class="countdown-digits">${state.secondsRemaining}s</span>
            </div>
            <div class="progress-track">
              <div id="timer-progress-fill" class="progress-fill" style="width: ${(state.secondsRemaining / quiz.timerPerQuestion) * 100}%"></div>
            </div>
          </div>

          <div style="margin-bottom: 24px;">
            <h2 style="font-size: 20px; line-height: 1.4; margin-bottom: 12px;">
              ${question.questionText}
            </h2>
          </div>

          <div class="options-grid">
            ${question.options.map((opt, idx) => {
              const letter = ['A', 'B', 'C', 'D'][idx];
              const isSelected = selectedIdx === idx;
              return `
                <button type="button" class="option-btn ${isSelected ? 'selected' : ''}" data-index="${idx}" ${answerSubmitted ? 'disabled' : ''}>
                  <span class="option-badge">${letter}</span>
                  <span style="flex:1;">${opt}</span>
                </button>
              `;
            }).join('')}
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:20px; border-top:1px solid var(--border-color); padding-top:16px; flex-wrap:wrap; gap:8px;">
            <span class="text-muted" style="font-size:12px;">
              Keyboard: <kbd style="background:rgba(51,65,85,0.8); padding:2px 6px; border-radius:4px; font-family:var(--font-mono);">1-4</kbd> or <kbd style="background:rgba(51,65,85,0.8); padding:2px 6px; border-radius:4px; font-family:var(--font-mono);">A-D</kbd>
            </span>
            <button type="button" class="btn btn-primary" id="btn-submit-answer" ${answerSubmitted || selectedIdx === null ? 'disabled' : ''} style="display:inline-flex; align-items:center; gap:8px;">
              <span>${qIndex >= totalQ - 1 ? 'Submit Final Answer' : (answerSubmitted ? 'Answer submitted' : 'Submit Answer')}</span>
              ${icon('arrowRight')}
            </button>
          </div>
        </div>
      `;
    }

    function renderDisqualifiedHTML() {
      const p = state.currentParticipant;
      return `
        <div class="battle-card battle-card-sm text-center" style="border-color: rgba(239,68,68,0.5);">
          ${state.fullscreenWarningMessage ? `
            <div class="notice-box notice-box-red" style="text-align:left; margin-bottom:16px;">
              <span class="notice-icon">${icon('alertTriangle', 'icon-md')}</span>
              <div><strong>Fullscreen Warning</strong><p style="margin-top:2px; font-size:12px;">${state.fullscreenWarningMessage}</p></div>
            </div>
          ` : ''}
          <div style="margin-bottom: 12px;">
            ${icon('alertTriangle', 'icon-2xl text-red')}
          </div>
          <h2 style="font-size: 24px; color: var(--accent-red); margin-bottom: 6px;">
            Disqualified
          </h2>
          <p class="text-secondary" style="font-size: 14px; margin-bottom: 20px;">
            An anti-cheat violation occurred during the active quiz.
          </p>

          <div class="notice-box notice-box-red" style="text-align: left;">
            <span class="notice-icon">${icon('alert', 'icon-md')}</span>
            <div>
              <strong>Violation Reason:</strong>
              <p style="margin-top: 2px; font-size: 12px;">
                ${p?.disqualificationReason || 'Tab switch or window focus loss detected'}
              </p>
              <p style="margin-top: 4px; font-size: 10px; opacity: 0.8;" class="font-mono">
                Timestamp: ${new Date(p?.disqualifiedAt || Date.now()).toLocaleTimeString()}
              </p>
            </div>
          </div>

          <button class="btn btn-secondary btn-block" id="btn-return-lobby">
            Return to Code Portal
          </button>
        </div>
      `;
    }

    function renderWaitingForResultsHTML() {
      const p = state.currentParticipant;
      const quiz = state.selectedQuiz || state.quizzes[0];
      const finishedCount = state.participants.filter(pt => pt.quizCode === quiz.code && pt.status === 'finished').length;
      const totalCount = state.participants.filter(pt => pt.quizCode === quiz.code && pt.status !== 'disqualified').length;

      return `
        <div class="battle-card battle-card-sm text-center">
          <div class="pulse-indicator-wrapper" style="margin: 0 auto 16px;">
            <div class="pulse-ring-outer"></div>
            <div class="pulse-ring-inner">${icon('trophy', 'icon-lg')}</div>
          </div>

          <span class="badge-live" style="background:rgba(234,179,8,0.15); color:#fde047; border-color:rgba(234,179,8,0.3); margin-bottom:8px;">
            QUIZ COMPLETED • AWAITING HOST
          </span>
          <h2 style="font-size: 24px; margin-top: 6px; margin-bottom: 6px;">Well Done, ${p?.name || 'Contender'}!</h2>
          <p class="text-secondary" style="font-size: 13px; margin-bottom: 20px;">
            Your answers have been securely recorded. Please wait for the admin to publish the final winners and victory podium.
          </p>

          <div style="background:rgba(15,23,42,0.85); border:1px solid var(--border-color); border-radius:12px; padding:16px; margin-bottom:20px;">
            <span class="text-muted" style="font-size:11px; text-transform:uppercase;">Your Preliminary Score</span>
            <h3 class="font-mono text-cyan" style="font-size:32px; margin:4px 0;">${p?.score || 0} <span style="font-size:16px; color:var(--text-secondary);">PTS</span></h3>
            <p class="text-secondary" style="font-size:12px;">${p?.correctCount || 0} / ${quiz.questions.length} Correct Answers</p>
          </div>

          <div style="background:rgba(30,41,59,0.5); border:1px solid var(--border-color); border-radius:8px; padding:10px 14px; margin-bottom:18px; display:flex; justify-content:space-between; align-items:center; font-size:12px;">
            <span class="text-secondary">Arena Submissions:</span>
            <span class="font-mono text-emerald font-bold">${finishedCount} / ${totalCount || 1} Finished</span>
          </div>

          <div class="notice-box notice-box-cyan" style="text-align: left; margin-bottom: 0;">
            <span class="notice-icon">${icon('alert', 'icon-md')}</span>
            <div>
              <strong>Live Scoreboard Sync:</strong>
              <p style="margin-top: 2px; font-size: 11px; line-height: 1.4;">
                As soon as the host publishes the winners, your screen will automatically switch to the <strong>Top 3 Victory Podium & Live Scoreboard</strong>.
              </p>
            </div>
          </div>

          <button class="btn btn-primary btn-block" id="btn-join-another-quiz" style="margin-top:18px;">
            Join Another Quiz
          </button>
        </div>
      `;
    }

    // =========================================================================
    // VICTORY PODIUM & ANIMATED TROPHY PROGRESS BAR LEADERBOARD
    // =========================================================================
    function renderLeaderboardHTML() {
      const quiz = state.selectedQuiz || state.quizzes[0];
      const list = [...state.participants.filter(p => p.quizCode === quiz.code && p.status !== 'disqualified')];
      list.sort((a, b) => b.score - a.score || a.totalTimeTakenSeconds - b.totalTimeTakenSeconds);

      const first = list[0];
      const second = list[1];
      const third = list[2];
      const rest = list.slice(3);

      const maxScorePossible = (quiz.questions.length * (quiz.pointsPerQuestion + 50)) || 600;
      const topScore = first ? first.score : 0;
      const progressPercent = Math.min(100, Math.round((topScore / maxScorePossible) * 100)) || 75;

      return `
        <div class="battle-card battle-card-lg celebration-arena">
          <div style="margin-bottom: 20px;">
            <span class="badge-live" style="background:rgba(251,191,36,0.15); color:#fde047; border-color:rgba(251,191,36,0.35); display:inline-flex; align-items:center; gap:6px;">
              ${icon('trophy', 'icon-sm')} VICTORY PODIUM
            </span>
            <h2 class="font-cartoon" style="font-size: 30px; margin-top: 6px; color: #ffffff;">
              Top 3 Winners & Trophy Standings
            </h2>
            <p class="text-secondary" style="font-size: 14px;">
              Final standings for <strong>${quiz.title}</strong> (${quiz.code})
            </p>
          </div>

          <!-- Animated Trophy Progress Bar Graphic -->
          <div class="trophy-progress-section">
            <div class="trophy-progress-header">
              <div style="display:inline-flex; align-items:center; gap:8px;">
                ${icon('trophy', 'icon-md')}
                <span style="font-weight:700; font-size:13px; letter-spacing:0.05em; text-transform:uppercase;">
                  Tournament Progress
                </span>
              </div>
              <span class="font-mono text-cyan font-bold" style="font-size:13px;">Top Score: ${topScore} PTS (${progressPercent}%)</span>
            </div>

            <div class="trophy-track-container">
              <div class="trophy-track-bar" style="width: ${progressPercent}%;"></div>
            </div>

            <div class="trophy-milestone-nodes">
              <div class="trophy-node ${progressPercent >= 25 ? 'active' : ''}">
                <div class="trophy-node-badge">${icon('medalBronze', 'icon-sm')}</div>
                <span style="color:#fdba74; margin-top:4px;">Bronze</span>
              </div>
              <div class="trophy-node ${progressPercent >= 50 ? 'active' : ''}">
                <div class="trophy-node-badge">${icon('medalSilver', 'icon-sm')}</div>
                <span style="color:#cbd5e1; margin-top:4px;">Silver</span>
              </div>
              <div class="trophy-node ${progressPercent >= 75 ? 'active' : ''}">
                <div class="trophy-node-badge">${icon('medalGold', 'icon-sm')}</div>
                <span style="color:#fde047; margin-top:4px;">Gold</span>
              </div>
              <div class="trophy-node ${progressPercent >= 90 ? 'active' : ''}">
                <div class="trophy-node-badge">${icon('crown', 'icon-sm')}</div>
                <span style="color:#fef08a; margin-top:4px;">Champion</span>
              </div>
            </div>
          </div>

          <!-- 1st, 2nd, and 3rd Place Victory Podium Illustration -->
          <div class="cartoon-podium-stage">
            <!-- 2nd Place Silver -->
            <div class="podium-stand-col stand-silver">
              ${second ? `
                <div class="cartoon-winner-card">
                  <div class="cartoon-avatar-frame">
                    ${icon('medalSilver', 'icon-lg')}
                  </div>
                  <div style="font-weight:800; font-size:14px; margin-top:8px;" class="truncate">${second.name}</div>
                  <div class="font-mono text-cyan" style="font-size:12px; font-weight:700;">${second.score} PTS</div>
                </div>
                <div class="pedestal-block">
                  <div class="pedestal-rank-circle">2</div>
                  <span class="font-cartoon" style="font-size:12px; font-weight:800; color:#e2e8f0; letter-spacing:0.08em;">SILVER</span>
                </div>
              ` : `
                <div style="height:100px; display:flex; align-items:center; justify-content:center; color:var(--text-muted);">Empty Stand</div>
                <div class="pedestal-block" style="opacity:0.4;">
                  <div class="pedestal-rank-circle">2</div>
                </div>
              `}
            </div>

            <!-- 1st Place Golden Champion with Golden Trophy -->
            <div class="podium-stand-col stand-gold">
              ${first ? `
                <div class="cartoon-winner-card">
                  <div class="cartoon-avatar-frame">
                    <div class="golden-trophy-glow">${icon('trophy', 'icon-lg')}</div>
                    ${icon('crown', 'icon-lg')}
                  </div>
                  <div style="font-weight:900; font-size:16px; margin-top:8px; color:#fef08a;" class="truncate">${first.name}</div>
                  <div class="font-mono font-bold" style="font-size:13px; color:#fde047;">${first.score} PTS</div>
                </div>
                <div class="pedestal-block">
                  <div class="pedestal-rank-circle">1</div>
                  <span class="font-cartoon" style="font-size:13px; font-weight:900; color:#fef08a; letter-spacing:0.1em;">GOLD CHAMPION</span>
                </div>
              ` : `
                <div style="height:120px; display:flex; align-items:center; justify-content:center; color:var(--text-muted);">Empty Stand</div>
                <div class="pedestal-block" style="opacity:0.4;">
                  <div class="pedestal-rank-circle">1</div>
                </div>
              `}
            </div>

            <!-- 3rd Place Bronze -->
            <div class="podium-stand-col stand-bronze">
              ${third ? `
                <div class="cartoon-winner-card">
                  <div class="cartoon-avatar-frame">
                    ${icon('medalBronze', 'icon-lg')}
                  </div>
                  <div style="font-weight:800; font-size:14px; margin-top:8px;" class="truncate">${third.name}</div>
                  <div class="font-mono text-amber" style="font-size:12px; font-weight:700;">${third.score} PTS</div>
                </div>
                <div class="pedestal-block">
                  <div class="pedestal-rank-circle">3</div>
                  <span class="font-cartoon" style="font-size:12px; font-weight:800; color:#fdba74; letter-spacing:0.08em;">BRONZE</span>
                </div>
              ` : `
                <div style="height:80px; display:flex; align-items:center; justify-content:center; color:var(--text-muted);">Empty Stand</div>
                <div class="pedestal-block" style="opacity:0.4;">
                  <div class="pedestal-rank-circle">3</div>
                </div>
              `}
            </div>
          </div>

          <!-- Others List Below the Animation -->
          <div style="margin-top: 36px; text-align: left;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
              <h3 style="font-size: 16px; display:inline-flex; align-items:center; gap:8px;">
                ${icon('chart', 'icon-md')} All Rankings (${rest.length})
              </h3>
              <span class="text-muted" style="font-size:12px;">Ranks 4 and below</span>
            </div>

            <div style="overflow-x:auto; background:rgba(15,23,42,0.85); border:1px solid var(--border-color); border-radius:12px;">
              <table class="scoreboard-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Student Name</th>
                    <th>College & Department</th>
                    <th>Accuracy</th>
                    <th style="text-align:right;">Final Score</th>
                  </tr>
                </thead>
                <tbody>
                  ${rest.length === 0 ? `
                    <tr><td colspan="5" style="text-align:center; padding:20px;" class="text-muted">No additional contenders.</td></tr>
                  ` : rest.map((p, idx) => `
                    <tr>
                      <td class="font-mono font-bold">#${idx + 4}</td>
                      <td style="font-weight:700;">${p.name} ${p.id === state.currentParticipant?.id ? '<span class="text-cyan">(You)</span>' : ''}</td>
                      <td class="text-secondary">${p.collegeName} • ${p.department}</td>
                      <td class="text-emerald font-mono">${p.correctCount}/${quiz.questions.length}</td>
                      <td class="font-mono text-cyan font-bold" style="text-align:right;">${p.score} PTS</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <div style="margin-top: 32px; display:flex; justify-content:center; gap:12px;">
            <button class="btn btn-primary" id="btn-play-again">
              Join Another Quiz
            </button>
          </div>
        </div>
      `;
    }

    function renderAdminLoginHTML() {
      return `
        <div class="battle-card battle-card-sm text-center">
          <div style="margin-bottom: 12px;">
            ${icon('lock', 'icon-2xl text-cyan')}
          </div>
          <h2 style="font-size: 22px; margin-bottom: 6px;">Admin Login</h2>
          <p class="text-secondary" style="font-size: 13px; margin-bottom: 20px;">
            Enter your credentials to access the administrative control portal.
          </p>

          <form id="admin-login-form">
            <div class="form-group" style="text-align:left;">
              <label class="form-label" for="admin-email">Admin Email</label>
              <input
                type="email"
                id="admin-email"
                class="form-input"
                placeholder="Enter admin email"
                value=""
                required
                autocomplete="email"
                autofocus
              />
            </div>

            <div class="form-group" style="text-align:left;">
              <label class="form-label" for="admin-password">Password</label>
              <div style="position:relative;">
                <input
                  type="password"
                  id="admin-password"
                  class="form-input"
                  placeholder="Enter admin password"
                  value=""
                  required
                  style="padding-right: 44px;"
                  autocomplete="current-password"
                />
                <button
                  type="button"
                  id="btn-toggle-password-visibility"
                  style="position:absolute; right:8px; top:50%; transform:translateY(-50%); background:transparent; border:none; color:var(--text-secondary); cursor:pointer; padding:6px 8px; font-size:16px; line-height:1; display:flex; align-items:center; justify-content:center; border-radius:4px;"
                  title="Show / Hide Password"
                  aria-label="Show or hide password"
                >
                  ${icon('eye')}
                </button>
              </div>
            </div>

            <button type="submit" class="btn btn-primary btn-block" style="padding:12px; margin-top:12px; font-weight:700;">
              Log In
            </button>
          </form>
        </div>
      `;
    }

    function renderAdminDashboardHTML() {
      if (state.adminView === 'create_quiz') return renderAdminCreateQuizView();
      if (state.adminView === 'quiz_inside_manage') return renderAdminInsideQuizManageView();
      if (state.adminView === 'live_scoreboard_page') return renderAdminSeparateScoreboardPageView();
      return renderAdminQuizzesListView();
    }

    function renderAdminQuizzesListView() {
      return `
        <div class="battle-card battle-card-lg">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:20px; border-bottom:1px solid var(--border-color); padding-bottom:16px;">
            <div>
              <span class="badge-live">DASHBOARD</span>
              <h2 style="font-size: 24px; margin-top:4px;">Quiz Management</h2>
              <p class="text-muted" style="font-size:13px;">Manage quizzes, launch sessions, and view live scoreboards.</p>
            </div>

            <div style="display:flex; gap:10px;">
              <button class="btn btn-primary btn-sm" id="btn-admin-nav-create">
                ${icon('plus', 'icon-sm')} Create Quiz
              </button>
            </div>
          </div>

          <div class="quiz-grid">
            ${state.quizzes.map(q => {
              const quizParticipants = state.participants.filter(p => p.quizCode === q.code);
              const isCurrentActive = state.activeQuizCode === q.code;
              return `
                <div class="quiz-card-item ${isCurrentActive ? 'is-active-arena' : ''}">
                  <div>
                    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
                      <span class="badge-status ${q.status === 'active' ? 'badge-active' : q.status === 'lobby' ? 'badge-lobby' : q.status === 'results_revealed' ? 'badge-results' : 'badge-draft'}">
                        ${q.status}
                      </span>
                      <span class="font-mono text-cyan font-bold" style="font-size:13px; background:rgba(6,182,212,0.15); padding:2px 8px; border-radius:6px;">
                        ${q.code}
                      </span>
                    </div>

                    <h3 style="font-size:16px; margin-bottom:6px; line-height:1.3;">${q.title}</h3>
                    <p class="text-muted" style="font-size:12px; margin-bottom:12px; line-height:1.4;">${q.description || 'No description provided'}</p>

                    <div style="display:flex; flex-wrap:wrap; gap:8px; font-size:11px; margin-bottom:16px;">
                      <span style="background:rgba(51,65,85,0.7); padding:3px 8px; border-radius:4px; display:inline-flex; align-items:center; gap:4px;">${icon('book', 'icon-sm')} ${q.questions.length} Questions</span>
                      <span style="background:rgba(51,65,85,0.7); padding:3px 8px; border-radius:4px; display:inline-flex; align-items:center; gap:4px;">${icon('clock', 'icon-sm')} ${q.timerPerQuestion}s / Q</span>
                      <span style="background:rgba(51,65,85,0.7); padding:3px 8px; border-radius:4px; display:inline-flex; align-items:center; gap:4px;">${icon('users', 'icon-sm')} ${quizParticipants.length} Players</span>
                    </div>
                  </div>

                  <div style="display:flex; flex-direction:column; gap:8px; border-top:1px solid var(--border-color); padding-top:14px;">
                    <div style="display:flex; gap:8px;">
                      <button class="btn btn-primary btn-sm btn-manage-quiz" data-id="${q.id}" style="flex:1;">
                        ${icon('settings', 'icon-sm')} Manage Quiz
                      </button>
                      <button class="btn ${q.status === 'active' ? 'btn-danger' : 'btn-success'} btn-sm btn-dashboard-start-quiz" data-id="${q.id}" title="${q.status === 'active' ? 'Stop Quiz' : 'Start Quiz'}">
                        ${icon(q.status === 'active' ? 'refresh' : 'play', 'icon-sm')} ${q.status === 'active' ? 'Stop' : 'Start'}
                      </button>
                      <button class="btn btn-danger btn-sm btn-delete-quiz" data-id="${q.id}" title="Delete Quiz">
                        ${icon('trash', 'icon-sm')}
                      </button>
                    </div>
                    <button class="btn btn-secondary btn-sm btn-view-scoreboard-separate" data-id="${q.id}">
                      ${icon('chart', 'icon-sm')} View Live Scoreboard
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    function renderAdminInsideQuizManageView() {
      const quiz = getManagingQuiz();
      if (!quiz) return renderAdminQuizzesListView();

      const list = [...state.participants.filter(p => p.quizCode === quiz.code && p.status !== 'disqualified')].sort((a, b) => (b.score || 0) - (a.score || 0) || (a.totalTimeTakenSeconds || 0) - (b.totalTimeTakenSeconds || 0));
      const isQuizActive = quiz.status === 'active';

      return `
        <div class="battle-card battle-card-lg">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:20px; border-bottom:1px solid var(--border-color); padding-bottom:16px;">
            <div>
              <button class="btn btn-secondary btn-sm" id="btn-back-to-quizzes-list" style="margin-bottom:8px;">
                ${icon('arrowLeft', 'icon-sm')} All Quizzes
              </button>
              <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                <span class="badge-status ${quiz.status === 'active' ? 'badge-active' : quiz.status === 'lobby' ? 'badge-lobby' : quiz.status === 'results_revealed' ? 'badge-results' : 'badge-draft'}">
                  ${quiz.status}
                </span>
                <span class="font-mono text-cyan font-bold" style="font-size:14px; background:rgba(6,182,212,0.15); padding:2px 8px; border-radius:6px; border:1px solid rgba(6,182,212,0.3);">
                  ${quiz.code}
                </span>
                <span class="text-muted" style="font-size:12px;">• ${quiz.category} • <strong class="text-cyan">${quiz.timerPerQuestion}s</strong> / Q • <strong class="text-cyan">${quiz.pointsPerQuestion}</strong> pts</span>
              </div>
              <h2 style="font-size: 24px; margin-top:4px;">${quiz.title}</h2>
            </div>

            <div style="display:flex; gap:8px; flex-wrap:wrap;">
              <button class="btn btn-primary btn-sm" id="btn-view-scoreboard-separate-inside">
                ${icon('chart', 'icon-sm')} View Scoreboard
              </button>
              <button class="btn btn-secondary btn-sm" id="btn-inside-add-question-modal">
                ${icon('plus', 'icon-sm')} Add Question
              </button>
            </div>
          </div>

          <!-- QUIZ PARAMETERS & SCORING RULES CONFIGURATION (MODIFY CODE, TIME & POINTS) -->
          <div style="background:rgba(15,23,42,0.85); border:1px solid var(--border-color); border-radius:14px; padding:18px; margin-bottom:24px; box-shadow:0 4px 20px rgba(0,0,0,0.3);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:8px;">
              <div>
                <h3 style="font-size:16px; display:inline-flex; align-items:center; gap:8px;">
                  <span>${icon('settings', 'icon-sm')} Modify Code, Time & Points</span>
                  <span class="badge-live" style="font-size:10px; padding:2px 6px;">EDITABLE</span>
                </h3>
                <p class="text-secondary" style="font-size:12px;">Customize quiz access code, timer per question, base score points, and title</p>
              </div>
              <div id="settings-save-success-msg" style="display:none; color:var(--accent-emerald); font-size:12px; font-weight:700; background:rgba(16,185,129,0.15); padding:4px 12px; border-radius:6px; border:1px solid rgba(16,185,129,0.3);">
                ✓ Settings saved
              </div>
            </div>

            <form id="form-manage-quiz-settings">
              <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:14px; margin-bottom:14px;">
                <div class="form-group" style="margin-bottom:0;">
                  <label class="form-label" for="manage-quiz-code">${icon('key', 'icon-sm')} Quiz Access Code</label>
                  <div style="display:flex; gap:6px;">
                    <input type="text" id="manage-quiz-code" class="form-input font-mono font-bold" style="text-transform:uppercase; color:var(--accent-cyan);" value="${quiz.code}" placeholder="e.g. BB-8942" required />
                    <button type="button" class="btn btn-secondary btn-sm" id="btn-generate-quiz-code" title="Generate Random Code">${icon('dice', 'icon-sm')}</button>
                  </div>
                </div>

                <div class="form-group" style="margin-bottom:0;">
                  <label class="form-label" for="manage-quiz-title">Quiz Title</label>
                  <input type="text" id="manage-quiz-title" class="form-input" value="${quiz.title}" required />
                </div>

                <div class="form-group" style="margin-bottom:0;">
                  <label class="form-label" for="manage-quiz-timer">${icon('clock', 'icon-sm')} Timer / Question (Seconds)</label>
                  <div style="display:flex; gap:6px;">
                    <input type="number" id="manage-quiz-timer" class="form-input font-mono" min="5" max="300" value="${quiz.timerPerQuestion || 20}" required style="width:90px;" />
                    <select id="manage-quiz-timer-presets" class="form-select" style="flex:1;">
                      <option value="">Presets...</option>
                      <option value="10" ${quiz.timerPerQuestion === 10 ? 'selected' : ''}>10s (Fast)</option>
                      <option value="15" ${quiz.timerPerQuestion === 15 ? 'selected' : ''}>15s (Quick)</option>
                      <option value="20" ${quiz.timerPerQuestion === 20 ? 'selected' : ''}>20s (Standard)</option>
                      <option value="30" ${quiz.timerPerQuestion === 30 ? 'selected' : ''}>30s (Moderate)</option>
                      <option value="45" ${quiz.timerPerQuestion === 45 ? 'selected' : ''}>45s (Extended)</option>
                      <option value="60" ${quiz.timerPerQuestion === 60 ? 'selected' : ''}>60s (Long)</option>
                    </select>
                  </div>
                </div>

                <div class="form-group" style="margin-bottom:0;">
                  <label class="form-label" for="manage-quiz-points">${icon('target', 'icon-sm')} Base Points / Question</label>
                  <div style="display:flex; gap:6px;">
                    <input type="number" id="manage-quiz-points" class="form-input font-mono" min="10" max="1000" step="10" value="${quiz.pointsPerQuestion || 100}" required style="width:90px;" />
                    <select id="manage-quiz-points-presets" class="form-select" style="flex:1;">
                      <option value="">Presets...</option>
                      <option value="50" ${quiz.pointsPerQuestion === 50 ? 'selected' : ''}>50 pts</option>
                      <option value="100" ${quiz.pointsPerQuestion === 100 ? 'selected' : ''}>100 pts</option>
                      <option value="150" ${quiz.pointsPerQuestion === 150 ? 'selected' : ''}>150 pts</option>
                      <option value="200" ${quiz.pointsPerQuestion === 200 ? 'selected' : ''}>200 pts</option>
                      <option value="500" ${quiz.pointsPerQuestion === 500 ? 'selected' : ''}>500 pts</option>
                    </select>
                  </div>
                </div>

                <div class="form-group" style="margin-bottom:0;">
                  <label class="form-label" for="manage-quiz-category">Category</label>
                  <input type="text" id="manage-quiz-category" class="form-input" value="${quiz.category || 'General Engineering'}" required />
                </div>
              </div>

              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; border-top:1px solid rgba(51,65,85,0.6); padding-top:12px;">
                <label style="display:inline-flex; align-items:center; gap:8px; cursor:pointer; font-size:13px;">
                  <input type="checkbox" id="manage-quiz-speed-bonus" ${quiz.speedBonusEnabled !== false ? 'checked' : ''} style="width:16px; height:16px; accent-color:var(--accent-cyan);" />
                  <span style="display:inline-flex; align-items:center; gap:4px;">${icon('bolt', 'icon-sm')} Speed Bonus (Fast answers earn up to +50 bonus points)</span>
                </label>

                <button type="submit" class="btn btn-primary btn-sm" id="btn-save-quiz-settings">
                  ${icon('save', 'icon-sm')} Save Changes
                </button>
              </div>
            </form>
          </div>

          <!-- INSIDE-THE-QUIZ START & LIVE SCOREBOARD CONTROL BAR -->
          <div style="background:rgba(15,23,42,0.7); border:1px solid var(--accent-cyan); border-radius:14px; padding:18px; margin-bottom:24px; box-shadow:0 0 20px rgba(6,182,212,0.15);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
              <div>
                <h3 style="font-size:16px;" class="text-cyan">Quiz Controls</h3>
                <p class="text-secondary" style="font-size:12px;">Start quiz, reveal results, or reset lobby for <strong>${quiz.code}</strong></p>
              </div>
              <span class="badge-live">CONTROLLER</span>
            </div>

            <div style="display:flex; flex-wrap:wrap; gap:10px;">
              <button class="btn ${isQuizActive ? 'btn-danger' : 'btn-success'}" id="btn-inside-start-quiz" data-id="${quiz.id}">
                ${icon(isQuizActive ? 'refresh' : 'play', 'icon-sm')} ${isQuizActive ? 'Stop Quiz' : 'Start Quiz'}
              </button>
              <button class="btn btn-amber" id="btn-inside-show-results" data-id="${quiz.id}">
                ${icon('trophy', 'icon-sm')} Publish Winners to Users
              </button>
              <button class="btn btn-secondary" id="btn-inside-reset-session" data-id="${quiz.id}">
                ${icon('refresh', 'icon-sm')} Reset Lobby
              </button>
            </div>
          </div>

          <!-- EMBEDDED REAL-TIME SCOREBOARD SECTION INSIDE THIS QUIZ -->
          <div style="margin-bottom:32px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
              <div>
                <h3 style="font-size:17px; display:inline-flex; align-items:center; gap:8px;">
                  ${icon('chart', 'icon-md')} Live Scoreboard (${list.length} Students)
                </h3>
                <div class="text-muted" style="font-size:12px;">Real-time scores for code <strong>${quiz.code}</strong></div>
              </div>
              <span class="badge-live">LIVE</span>
            </div>

            <div style="overflow-x:auto; background:rgba(15,23,42,0.85); border:1px solid var(--border-color); border-radius:12px;">
              <table class="scoreboard-table">
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Student Name</th>
                    <th>College & Dept</th>
                    <th>Answered</th>
                    <th>Score</th>
                    <th>Anti-Cheat</th>
                  </tr>
                </thead>
                <tbody>
                  ${list.length === 0 ? `
                    <tr>
                      <td colspan="6" style="text-align:center; padding:28px;" class="text-muted">
                        No students in this lobby yet. Students can join with code <strong class="text-cyan">${quiz.code}</strong>.
                      </td>
                    </tr>
                  ` : list.map((p, idx) => `
                    <tr style="${p.status === 'disqualified' ? 'opacity:0.72; background:rgba(239,68,68,0.04);' : ''}">
                      <td>
                        ${p.status === 'disqualified' ? `
                          <span style="background:rgba(239,68,68,0.2); color:var(--accent-red); padding:2px 8px; border-radius:4px; font-weight:bold; font-size:11px;">DISQUALIFIED</span>
                        ` : p.status === 'finished' ? `
                          <span style="background:rgba(16,185,129,0.2); color:var(--accent-emerald); padding:2px 8px; border-radius:4px; font-weight:bold; font-size:11px;">FINISHED</span>
                        ` : p.status === 'in_quiz' ? `
                          <span style="background:rgba(6,182,212,0.2); color:var(--accent-cyan); padding:2px 8px; border-radius:4px; font-weight:bold; font-size:11px;">IN PROGRESS</span>
                        ` : `
                          <span style="background:rgba(245,158,11,0.2); color:var(--accent-amber); padding:2px 8px; border-radius:4px; font-weight:bold; font-size:11px;">WAITING</span>
                        `}
                      </td>
                      <td style="font-weight:700; ${p.status === 'disqualified' ? 'text-decoration:line-through;' : ''}">${p.name} ${p.status === 'disqualified' ? '<span class="text-red font-mono" style="font-size:10px;">#${idx + 1}</span>' : ''}</td>
                      <td class="text-secondary">${p.collegeName} • ${p.department}</td>
                      <td class="font-mono text-emerald">${p.status === 'disqualified' ? '-' : `${p.correctCount}/${quiz.questions.length}`}</td>
                      <td class="font-mono ${p.status === 'disqualified' ? 'text-red' : 'text-cyan'} font-bold">${p.status === 'disqualified' ? '0 PTS' : `${p.score} PTS`}</td>
                      <td style="font-size:11px;">
                        ${p.disqualificationReason ? `<span class="text-red font-mono">${icon('alertTriangle', 'icon-sm')} ${p.disqualificationReason}</span>` : `<span class="text-emerald font-mono">${icon('check', 'icon-sm')} Monitored (Clean)</span>`}
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <!-- QUESTIONS & ANSWER KEY INSPECTOR INSIDE THIS QUIZ -->
          <div style="border-top:1px solid var(--border-color); padding-top:20px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
              <h3 style="font-size:17px; display:inline-flex; align-items:center; gap:8px;">
                ${icon('book', 'icon-md')} Questions (${quiz.questions.length})
              </h3>
              <button class="btn btn-secondary btn-sm" id="btn-inside-add-question-modal-2">
                ${icon('plus', 'icon-sm')} Add Question
              </button>
            </div>

            <div style="display:flex; flex-direction:column; gap:12px;">
              ${quiz.questions.map((q, idx) => `
                <div style="background:rgba(15,23,42,0.7); border:1px solid var(--border-color); border-radius:10px; padding:16px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <span class="font-bold text-cyan" style="font-size:13px;">Question ${idx + 1}</span>
                    <button class="btn btn-danger btn-sm btn-delete-question" data-quizid="${quiz.id}" data-qid="${q.id}" style="padding:2px 8px; font-size:11px;">
                      Remove
                    </button>
                  </div>

                  <p style="font-weight:600; font-size:14px; margin-bottom:12px;">${q.questionText}</p>

                  <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;">
                    ${q.options.map((opt, oIdx) => {
                      const isCorrect = q.correctAnswerIndex === oIdx;
                      return `
                        <div style="background:${isCorrect ? 'rgba(16,185,129,0.15)' : 'rgba(30,41,59,0.8)'}; border:1px solid ${isCorrect ? 'rgba(16,185,129,0.4)' : 'var(--border-color)'}; border-radius:6px; padding:8px 12px; font-size:12px; display:flex; align-items:center; gap:8px;">
                          <span style="font-weight:bold; color:${isCorrect ? 'var(--accent-emerald)' : 'var(--text-secondary)'};">${['A','B','C','D'][oIdx]}</span>
                          <span style="flex:1; color:${isCorrect ? '#ffffff' : 'var(--text-primary)'}; font-weight:${isCorrect ? '700' : 'normal'};">${opt}</span>
                          ${isCorrect ? '<span style="font-size:10px; background:rgba(16,185,129,0.3); color:var(--accent-emerald); padding:1px 6px; border-radius:4px; font-weight:bold;">KEY</span>' : ''}
                        </div>
                      `;
                    }).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }

    function renderAdminSeparateScoreboardPageView() {
      const quiz = getManagingQuiz();
      if (!quiz) return renderAdminQuizzesListView();

      const list = [...state.participants.filter(p => p.quizCode === quiz.code && p.status !== 'disqualified')].sort((a, b) => (b.score || 0) - (a.score || 0) || (a.totalTimeTakenSeconds || 0) - (b.totalTimeTakenSeconds || 0));

      const disqualifiedList = [...state.participants.filter(p => p.quizCode === quiz.code && p.status === 'disqualified')].sort((a, b) => (b.disqualifiedAt || 0) - (a.disqualifiedAt || 0));
      const allQuizPlayers = state.participants.filter(p => p.quizCode === quiz.code);
      const isQuizActive = quiz.status === 'active';

      const first = list[0];
      const second = list[1];
      const third = list[2];
      const rest = list.slice(3);

      const maxScorePossible = (quiz.questions.length * (quiz.pointsPerQuestion + 50)) || 600;
      const topScore = first ? first.score : 0;
      const progressPercent = Math.min(100, Math.round((topScore / maxScorePossible) * 100)) || 75;

      const isPodiumMode = state.scoreboardDisplayMode === 'podium' || quiz.status === 'results_revealed';
      const returnLabel = state.scoreboardReturnView === 'quizzes_list' ? 'All Quizzes' : 'Manage Quiz';

      return `
        <div class="battle-card battle-card-lg" style="box-shadow:0 25px 60px rgba(0,0,0,0.6);">
          <!-- Top Return and Header Navigation -->
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:20px; border-bottom:1px solid var(--border-color); padding-bottom:16px;">
            <div>
              <button class="btn btn-secondary btn-sm" id="btn-return-from-scoreboard-page" style="margin-bottom:8px;">
                ${icon('arrowLeft', 'icon-sm')} Return to ${returnLabel}
              </button>
              <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                <span class="badge-status ${quiz.status === 'active' ? 'badge-active' : quiz.status === 'lobby' ? 'badge-lobby' : quiz.status === 'results_revealed' ? 'badge-results' : 'badge-draft'}">
                  ${quiz.status}
                </span>
                <span class="font-mono text-cyan font-bold" style="font-size:15px; background:rgba(6,182,212,0.15); padding:3px 10px; border-radius:6px; border:1px solid rgba(6,182,212,0.35);">
                  ${quiz.code}
                </span>
                <span class="text-secondary" style="font-size:13px;">• ${quiz.title} • ${quiz.timerPerQuestion}s / Q</span>
              </div>
              <h2 style="font-size: 26px; margin-top:4px;">Live Scoreboard</h2>
            </div>

            <div style="display:flex; gap:8px; flex-wrap:wrap;">
              <button class="btn ${!isPodiumMode ? 'btn-primary' : 'btn-secondary'} btn-sm" id="btn-toggle-scoreboard-mode-table">
                ${icon('chart', 'icon-sm')} Standings Table
              </button>
              <button class="btn ${isPodiumMode ? 'btn-primary' : 'btn-secondary'} btn-sm" id="btn-toggle-scoreboard-mode-podium">
                ${icon('trophy', 'icon-sm')} Victory Podium
              </button>
            </div>
          </div>

          <!-- Quick Live Arena Host Controls Bar -->
          <div style="background:rgba(15,23,42,0.7); border:1px solid var(--border-color); border-radius:12px; padding:12px 16px; margin-bottom:24px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
            <div style="display:inline-flex; align-items:center; gap:12px;">
              <span class="badge-live">LIVE MONITOR</span>
              <span class="text-secondary" style="font-size:13px;">Students: <strong class="text-cyan font-mono">${allQuizPlayers.length}</strong></span>
            </div>

            <div style="display:flex; gap:8px; flex-wrap:wrap;">
              <button class="btn ${isQuizActive ? 'btn-danger' : 'btn-success'} btn-sm" id="btn-scoreboard-start-quiz" data-id="${quiz.id}">
                ${icon(isQuizActive ? 'refresh' : 'play', 'icon-sm')} ${isQuizActive ? 'Stop Quiz' : 'Start Quiz'}
              </button>
              <button class="btn btn-amber btn-sm" id="btn-scoreboard-show-results" data-id="${quiz.id}">
                ${icon('trophy', 'icon-sm')} Publish Winners to Users
              </button>
              <button class="btn btn-secondary btn-sm" id="btn-scoreboard-reset-session" data-id="${quiz.id}">
                ${icon('refresh', 'icon-sm')} Reset Lobby
              </button>
            </div>
          </div>

          ${isPodiumMode ? `
            <!-- WINNERS' PEDESTAL WITH GOLDEN TROPHY & TROPHY PROGRESS BAR -->
            <div class="celebration-arena">
              <div style="margin-bottom: 20px;">
                <span class="badge-live" style="background:rgba(251,191,36,0.15); color:#fde047; border-color:rgba(251,191,36,0.35); display:inline-flex; align-items:center; gap:6px;">
                  ${icon('trophy', 'icon-sm')} VICTORY PODIUM
                </span>
                <h2 class="font-cartoon" style="font-size: 30px; margin-top: 6px; color: #ffffff;">
                  Top 3 Winners & Trophy Standings
                </h2>
                <p class="text-secondary" style="font-size: 14px;">
                  Standings for <strong>${quiz.title}</strong> (${quiz.code})
                </p>
              </div>

              <!-- Animated Trophy Progress Bar Graphic -->
              <div class="trophy-progress-section">
                <div class="trophy-progress-header">
                  <div style="display:inline-flex; align-items:center; gap:8px;">
                    ${icon('trophy', 'icon-md')}
                    <span style="font-weight:700; font-size:13px; letter-spacing:0.05em; text-transform:uppercase;">
                      Tournament Progress
                    </span>
                  </div>
                  <span class="font-mono text-cyan font-bold" style="font-size:13px;">Top Score: ${topScore} PTS (${progressPercent}%)</span>
                </div>

                <div class="trophy-track-container">
                  <div class="trophy-track-bar" style="width: ${progressPercent}%;"></div>
                </div>

                <div class="trophy-milestone-nodes">
                  <div class="trophy-node ${progressPercent >= 25 ? 'active' : ''}">
                    <div class="trophy-node-badge">${icon('medalBronze', 'icon-sm')}</div>
                    <span style="color:#fdba74; margin-top:4px;">Bronze</span>
                  </div>
                  <div class="trophy-node ${progressPercent >= 50 ? 'active' : ''}">
                    <div class="trophy-node-badge">${icon('medalSilver', 'icon-sm')}</div>
                    <span style="color:#cbd5e1; margin-top:4px;">Silver</span>
                  </div>
                  <div class="trophy-node ${progressPercent >= 75 ? 'active' : ''}">
                    <div class="trophy-node-badge">${icon('medalGold', 'icon-sm')}</div>
                    <span style="color:#fde047; margin-top:4px;">Gold</span>
                  </div>
                  <div class="trophy-node ${progressPercent >= 90 ? 'active' : ''}">
                    <div class="trophy-node-badge">${icon('crown', 'icon-sm')}</div>
                    <span style="color:#fef08a; margin-top:4px;">Champion</span>
                  </div>
                </div>
              </div>

              <!-- 1st, 2nd, and 3rd Place Victory Podium Illustration -->
              <div class="cartoon-podium-stage">
                <!-- 2nd Place Silver -->
                <div class="podium-stand-col stand-silver">
                  ${second ? `
                    <div class="cartoon-winner-card">
                      <div class="cartoon-avatar-frame">
                        ${icon('medalSilver', 'icon-lg')}
                      </div>
                      <div style="font-weight:800; font-size:14px; margin-top:8px;" class="truncate">${second.name}</div>
                      <div class="font-mono text-cyan" style="font-size:12px; font-weight:700;">${second.score} PTS</div>
                    </div>
                    <div class="pedestal-block">
                      <div class="pedestal-rank-circle">2</div>
                      <span class="font-cartoon" style="font-size:12px; font-weight:800; color:#e2e8f0; letter-spacing:0.08em;">SILVER</span>
                    </div>
                  ` : `
                    <div style="height:100px; display:flex; align-items:center; justify-content:center; color:var(--text-muted);">Empty Stand</div>
                    <div class="pedestal-block" style="opacity:0.4;">
                      <div class="pedestal-rank-circle">2</div>
                    </div>
                  `}
                </div>

                <!-- 1st Place Golden Champion with Golden Trophy -->
                <div class="podium-stand-col stand-gold">
                  ${first ? `
                    <div class="cartoon-winner-card">
                      <div class="cartoon-avatar-frame">
                        <div class="golden-trophy-glow">${icon('trophy', 'icon-lg')}</div>
                        ${icon('crown', 'icon-lg')}
                      </div>
                      <div style="font-weight:900; font-size:16px; margin-top:8px; color:#fef08a;" class="truncate">${first.name}</div>
                      <div class="font-mono font-bold" style="font-size:13px; color:#fde047;">${first.score} PTS</div>
                    </div>
                    <div class="pedestal-block">
                      <div class="pedestal-rank-circle">1</div>
                      <span class="font-cartoon" style="font-size:13px; font-weight:900; color:#fef08a; letter-spacing:0.1em;">GOLD CHAMPION</span>
                    </div>
                  ` : `
                    <div style="height:120px; display:flex; align-items:center; justify-content:center; color:var(--text-muted);">Empty Stand</div>
                    <div class="pedestal-block" style="opacity:0.4;">
                      <div class="pedestal-rank-circle">1</div>
                    </div>
                  `}
                </div>

                <!-- 3rd Place Bronze -->
                <div class="podium-stand-col stand-bronze">
                  ${third ? `
                    <div class="cartoon-winner-card">
                      <div class="cartoon-avatar-frame">
                        ${icon('medalBronze', 'icon-lg')}
                      </div>
                      <div style="font-weight:800; font-size:14px; margin-top:8px;" class="truncate">${third.name}</div>
                      <div class="font-mono text-amber" style="font-size:12px; font-weight:700;">${third.score} PTS</div>
                    </div>
                    <div class="pedestal-block">
                      <div class="pedestal-rank-circle">3</div>
                      <span class="font-cartoon" style="font-size:12px; font-weight:800; color:#fdba74; letter-spacing:0.08em;">BRONZE</span>
                    </div>
                  ` : `
                    <div style="height:80px; display:flex; align-items:center; justify-content:center; color:var(--text-muted);">Empty Stand</div>
                    <div class="pedestal-block" style="opacity:0.4;">
                      <div class="pedestal-rank-circle">3</div>
                    </div>
                  `}
                </div>
              </div>

              <!-- Others List Below the Animation -->
              <div style="margin-top: 36px; text-align: left;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                  <h3 style="font-size: 16px; display:inline-flex; align-items:center; gap:8px;">
                    ${icon('chart', 'icon-md')} All Rankings (${rest.length})
                  </h3>
                  <span class="text-muted" style="font-size:12px;">Ranks 4 and below</span>
                </div>

                <div style="overflow-x:auto; background:rgba(15,23,42,0.85); border:1px solid var(--border-color); border-radius:12px;">
                  <table class="scoreboard-table">
                    <thead>
                      <tr>
                        <th>Rank</th>
                        <th>Student Name</th>
                        <th>College & Department</th>
                        <th>Accuracy</th>
                        <th style="text-align:right;">Final Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${rest.length === 0 ? `
                        <tr><td colspan="5" style="text-align:center; padding:20px;" class="text-muted">No additional contenders.</td></tr>
                      ` : rest.map((p, idx) => `
                        <tr>
                          <td class="font-mono font-bold">#${idx + 4}</td>
                          <td style="font-weight:700;">${p.name}</td>
                          <td class="text-secondary">${p.collegeName} • ${p.department}</td>
                          <td class="text-emerald font-mono">${p.correctCount}/${quiz.questions.length}</td>
                          <td class="font-mono text-cyan font-bold" style="text-align:right;">${p.score} PTS</td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ` : `
            <!-- LIVE STANDINGS TABLE VIEW -->
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
                <div>
                  <h3 style="font-size:18px; display:inline-flex; align-items:center; gap:8px;">
                    ${icon('chart', 'icon-md')} Live Standings (${allQuizPlayers.length} Students)
                  </h3>
                  <p class="text-muted" style="font-size:12px;">Updates automatically in real time.</p>
                </div>
              </div>

              <div style="overflow-x:auto; background:rgba(15,23,42,0.85); border:1px solid var(--border-color); border-radius:12px; margin-bottom:20px;">
                <table class="scoreboard-table">
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Status</th>
                      <th>Student Name</th>
                      <th>College & Dept</th>
                      <th>Answered</th>
                      <th>Total Score</th>
                      <th>Anti-Cheat</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${list.length === 0 ? `
                      <tr>
                        <td colspan="7" style="text-align:center; padding:32px;" class="text-muted">
                          No active students in this quiz yet. Students can join with code <strong class="text-cyan">${quiz.code}</strong>.
                        </td>
                      </tr>
                    ` : list.map((p, idx) => `
                      <tr>
                        <td class="font-mono font-bold" style="font-size:14px; color:${idx === 0 ? '#fbbf24' : idx === 1 ? '#e2e8f0' : idx === 2 ? '#fb923c' : 'var(--text-primary)'};">
                          ${idx === 0 ? '🥇 #1' : idx === 1 ? '🥈 #2' : idx === 2 ? '🥉 #3' : `#${idx + 1}`}
                        </td>
                        <td>
                          ${p.status === 'finished' ? `
                            <span style="background:rgba(16,185,129,0.2); color:var(--accent-emerald); padding:2px 8px; border-radius:4px; font-weight:bold; font-size:11px;">FINISHED</span>
                          ` : p.status === 'in_quiz' ? `
                            <span style="background:rgba(6,182,212,0.2); color:var(--accent-cyan); padding:2px 8px; border-radius:4px; font-weight:bold; font-size:11px;">IN PROGRESS</span>
                          ` : `
                            <span style="background:rgba(245,158,11,0.2); color:var(--accent-amber); padding:2px 8px; border-radius:4px; font-weight:bold; font-size:11px;">WAITING</span>
                          `}
                        </td>
                        <td style="font-weight:800; font-size:14px;">${p.name}</td>
                        <td class="text-secondary">${p.collegeName} • ${p.department}</td>
                        <td class="font-mono text-emerald">${p.correctCount}/${quiz.questions.length}</td>
                        <td class="font-mono text-cyan font-bold" style="font-size:14px;">${p.score} PTS</td>
                        <td style="font-size:11px;">
                          <span class="text-emerald font-mono">${icon('check', 'icon-sm')} Monitored (Clean)</span>
                        </td>
                      </tr>
                    `).join('')}

                    ${disqualifiedList.map(p => `
                      <tr style="opacity:0.6; background:rgba(239,68,68,0.05);">
                        <td class="font-mono text-red font-bold">DQ</td>
                        <td><span style="background:rgba(239,68,68,0.2); color:var(--accent-red); padding:2px 8px; border-radius:4px; font-weight:bold; font-size:11px;">DISQUALIFIED</span></td>
                        <td style="font-weight:700; text-decoration:line-through;">${p.name}</td>
                        <td class="text-secondary">${p.collegeName}</td>
                        <td class="font-mono text-muted">-</td>
                        <td class="font-mono text-red">0 PTS</td>
                        <td class="text-red font-mono" style="font-size:10px;">${icon('alertTriangle', 'icon-sm')} ${p.disqualificationReason || 'Tab switch violation'}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          `}
        </div>
      `;
    }

    function renderAdminCreateQuizView() {
      return `
        <div class="battle-card battle-card-lg">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; border-bottom:1px solid var(--border-color); padding-bottom:16px;">
            <div>
              <button class="btn btn-secondary btn-sm" id="btn-cancel-create-quiz" style="margin-bottom:8px;">
                ${icon('arrowLeft', 'icon-sm')} Back to All Quizzes
              </button>
              <h2 style="font-size: 24px; display:inline-flex; align-items:center; gap:8px;">
                ${icon('plus', 'icon-md')} Create a New Quiz
              </h2>
              <p class="text-secondary" style="font-size:13px;">Define questions, correct answer keys, and timers. Your created quiz will have its own live scoreboard.</p>
            </div>
          </div>

          <form id="quiz-creator-form">
            <div style="display:grid; grid-template-columns: 1fr 2fr 1fr 1fr; gap:12px; margin-bottom:16px;">
              <div class="form-group">
                <label class="form-label" for="new-q-code">${icon('key', 'icon-sm')} Quiz Code</label>
                <div style="display:flex; gap:6px;">
                  <input type="text" id="new-q-code" class="form-input font-mono font-bold" style="text-transform:uppercase; color:var(--accent-cyan);" placeholder="e.g. BB-9410" value="${state.newQuizCode || `BB-${Math.floor(1000 + Math.random() * 9000)}`}" required />
                  <button type="button" class="btn btn-secondary btn-sm" id="btn-random-create-code" title="Randomize Code">${icon('dice', 'icon-sm')}</button>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label" for="new-q-title">Quiz Title</label>
                <input type="text" id="new-q-title" class="form-input" placeholder="e.g. Modern CSS & Layouts Masters" value="${state.newQuizTitle}" required />
              </div>
              <div class="form-group">
                <label class="form-label" for="new-q-timer">Timer per Question</label>
                <select id="new-q-timer" class="form-select">
                  <option value="15" ${state.newQuizTimer === 15 ? 'selected' : ''}>15 Seconds</option>
                  <option value="20" ${state.newQuizTimer === 20 ? 'selected' : ''}>20 Seconds</option>
                  <option value="30" ${state.newQuizTimer === 30 ? 'selected' : ''}>30 Seconds</option>
                  <option value="60" ${state.newQuizTimer === 60 ? 'selected' : ''}>60 Seconds</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="new-q-points">Points / Question</label>
                <input type="number" id="new-q-points" class="form-input" value="${state.newQuizPoints}" required />
              </div>
            </div>

            <div style="border-top:1px solid var(--border-color); padding-top:16px; margin-bottom:16px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                <h4 style="font-size:15px; display:inline-flex; align-items:center; gap:6px;">
                  ${icon('book', 'icon-sm')} Questions (${state.newQuestions.length})
                </h4>
                <button type="button" class="btn btn-secondary btn-sm" id="btn-add-question-row">
                  ${icon('plus', 'icon-sm')} Add Another Question
                </button>
              </div>

              ${state.newQuestions.map((q, qIdx) => `
                <div style="background:rgba(15,23,42,0.7); border:1px solid var(--border-color); border-radius:10px; padding:14px; margin-bottom:12px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <span class="font-bold text-cyan" style="font-size:12px;">Question #${qIdx + 1}</span>
                    ${state.newQuestions.length > 1 ? `
                      <button type="button" class="btn btn-secondary btn-sm remove-question-btn" data-index="${qIdx}" style="padding:2px 8px; color:var(--accent-red);">Remove</button>
                    ` : ''}
                  </div>

                  <div class="form-group">
                    <input type="text" class="form-input q-text-input" data-index="${qIdx}" placeholder="Enter question text..." value="${q.questionText}" required />
                  </div>

                  <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;">
                    ${q.options.map((opt, oIdx) => `
                      <div style="display:flex; align-items:center; gap:6px;">
                        <input type="radio" name="correct-${qIdx}" class="q-correct-radio" data-qindex="${qIdx}" data-oindex="${oIdx}" ${q.correctAnswerIndex === oIdx ? 'checked' : ''} />
                        <input type="text" class="form-input q-option-input" data-qindex="${qIdx}" data-oindex="${oIdx}" placeholder="Option ${['A','B','C','D'][oIdx]}" value="${opt}" required />
                      </div>
                    `).join('')}
                  </div>
                </div>
              `).join('')}
            </div>

            <button type="submit" class="btn btn-primary btn-block" style="padding:14px;">
              Create Quiz & Open Quiz Management
            </button>
          </form>
        </div>
      `;
    }

    function renderAddQuestionModalHTML() {
      const quiz = getManagingQuiz();
      return `
        <div class="modal-backdrop" id="modal-backdrop-add-q">
          <div class="modal-card">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; border-bottom:1px solid var(--border-color); padding-bottom:12px;">
              <h3 style="font-size:18px; display:inline-flex; align-items:center; gap:8px;">
                ${icon('plus', 'icon-sm')} Add Question to ${quiz.code}
              </h3>
              <button class="btn btn-secondary btn-sm" id="btn-close-add-q-modal">✕</button>
            </div>

            <form id="form-modal-add-question">
              <div class="form-group">
                <label class="form-label" for="modal-q-text">Question Prompt</label>
                <textarea id="modal-q-text" class="form-textarea" rows="2" placeholder="e.g. What is the difference between let and var in JS?" required></textarea>
              </div>

              <div class="form-group">
                <label class="form-label">Options & Correct Answer Key</label>
                <div style="display:flex; flex-direction:column; gap:8px;">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <input type="radio" name="modal-correct" value="0" checked />
                    <input type="text" id="modal-opt-0" class="form-input" placeholder="Option A" required />
                  </div>
                  <div style="display:flex; align-items:center; gap:8px;">
                    <input type="radio" name="modal-correct" value="1" />
                    <input type="text" id="modal-opt-1" class="form-input" placeholder="Option B" required />
                  </div>
                  <div style="display:flex; align-items:center; gap:8px;">
                    <input type="radio" name="modal-correct" value="2" />
                    <input type="text" id="modal-opt-2" class="form-input" placeholder="Option C" required />
                  </div>
                  <div style="display:flex; align-items:center; gap:8px;">
                    <input type="radio" name="modal-correct" value="3" />
                    <input type="text" id="modal-opt-3" class="form-input" placeholder="Option D" required />
                  </div>
                </div>
              </div>

              <div style="margin-top:20px; display:flex; justify-content:flex-end; gap:8px;">
                <button type="button" class="btn btn-secondary btn-sm" id="btn-cancel-add-q">Cancel</button>
                <button type="submit" class="btn btn-primary btn-sm">Save to Quiz</button>
              </div>
            </form>
          </div>
        </div>
      `;
    }

    function renderRulesModalHTML() {
      return `
        <div class="modal-backdrop" id="modal-backdrop-rules">
          <div class="modal-card">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; border-bottom:1px solid var(--border-color); padding-bottom:12px;">
              <h3 style="font-size:18px; display:inline-flex; align-items:center; gap:8px;">
                ${icon('shield', 'icon-md text-cyan')} Anti-Cheat & Battle Rules
              </h3>
              <button class="btn btn-secondary btn-sm" id="btn-close-rules-modal">✕</button>
            </div>

            <div style="display:flex; flex-direction:column; gap:12px; font-size:13px; color:var(--text-secondary);">
              <div class="notice-box notice-box-amber" style="margin:0;">
                <span class="notice-icon">1.</span>
                <div>
                  <strong>Zero-Tolerance Tab-Switch Rule:</strong>
                  <p style="font-size:11px; margin-top:2px;">
                    Once an active battle starts, switching browser tabs, minimizing the window, or activating another application triggers instant disqualification via JS <code>visibilitychange</code>.
                  </p>
                </div>
              </div>

              <div style="background:rgba(15,23,42,0.6); padding:12px; border-radius:8px; border:1px solid var(--border-color);">
                <strong class="text-cyan">2. Dual Timers:</strong>
                <p style="font-size:11px; margin-top:2px;">
                  Each question has a numerical countdown and depleting color-coded progress bar. When time expires, your selected answer is locked in.
                </p>
              </div>

              <div style="background:rgba(15,23,42,0.6); padding:12px; border-radius:8px; border:1px solid var(--border-color);">
                <strong class="text-indigo">3. Inside-Quiz Live Scoreboard:</strong>
                <p style="font-size:11px; margin-top:2px;">
                  Hosts launch battles, release results, and monitor live scoreboards inside each dedicated quiz view.
                </p>
              </div>

              <div style="background:rgba(15,23,42,0.6); padding:12px; border-radius:8px; border:1px solid var(--border-color);">
                <strong class="text-amber">4. Victory Podium & Trophy Standings:</strong>
                <p style="font-size:11px; margin-top:2px;">
                  After quiz completion, the 1st, 2nd, and 3rd place victory podium is celebrated with an animated trophy progress graphic.
                </p>
              </div>
            </div>

            <div style="margin-top:20px; text-align:right;">
              <button class="btn btn-primary btn-sm" id="btn-modal-understand">I Understand the Rules</button>
            </div>
          </div>
        </div>
      `;
    }

    function renderFooterHTML() {
      return `
        <footer class="global-footer">
          <div style="max-width:1200px; margin:0 auto; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
            <div style="display:inline-flex; align-items:center; gap:6px;">
              ${icon('bolt', 'icon-sm text-cyan')} <strong>BYTE BATTLE</strong> • Professional Multiplayer Quiz Arena
            </div>
            <div style="font-size:11px; color:var(--text-muted);">Victory Podium Standings • Live Scoreboards • Anti-Cheat Monitored</div>
          </div>
        </footer>
      `;
    }

    function attachEventListeners() {
      document.getElementById('header-brand-logo')?.addEventListener('click', () => {
        state.currentView = 'student';
        state.studentStep = 'code_portal';
        renderApp();
      });

      document.getElementById('header-rules-btn')?.addEventListener('click', () => {
        state.isRulesModalOpen = true;
        renderApp();
      });

      document.getElementById('header-admin-portal-btn')?.addEventListener('click', () => {
        state.currentView = 'admin';
        state.adminView = 'quizzes_list';
        renderApp();
      });

      document.getElementById('header-student-view-btn')?.addEventListener('click', () => {
        state.currentView = 'student';
        renderApp();
      });

      document.getElementById('header-admin-logout-btn')?.addEventListener('click', () => {
        state.isAdminLoggedIn = false;
        localStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
        state.currentView = 'student';
        renderApp();
      });

      document.getElementById('btn-close-rules-modal')?.addEventListener('click', () => {
        state.isRulesModalOpen = false;
        renderApp();
      });
      document.getElementById('btn-modal-understand')?.addEventListener('click', () => {
        state.isRulesModalOpen = false;
        renderApp();
      });

      const codeForm = document.getElementById('code-portal-form');
      codeForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('quiz-code-input');
        if (input) handleCodeSubmit(input.value);
      });

      document.querySelectorAll('.quick-join-card').forEach(card => {
        card.addEventListener('click', () => {
          const code = card.getAttribute('data-code');
          if (code) handleCodeSubmit(code);
        });
      });

      const regForm = document.getElementById('student-reg-form');
      regForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('reg-name')?.value;
        const college = document.getElementById('reg-college')?.value;
        const dept = document.getElementById('reg-dept')?.value;
        handleRegistrationSubmit(name, college, dept);
      });

      document.getElementById('reg-back-btn')?.addEventListener('click', () => {
        state.studentStep = 'code_portal';
        renderApp();
      });

      document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-index') || '0', 10);
          state.selectedOptionIndex = idx;
          document.querySelectorAll('.option-btn').forEach((b, i) => {
            if (i === idx) b.classList.add('selected');
            else b.classList.remove('selected');
          });
          const submitBtn = document.getElementById('btn-submit-answer');
          if (submitBtn) submitBtn.disabled = false;
        });
      });

      document.getElementById('btn-submit-answer')?.addEventListener('click', () => {
        handleOptionSubmit(false);
      });

      document.getElementById('btn-return-lobby')?.addEventListener('click', () => {
        clearIntervalTimer();
        state.currentParticipant = null;
        localStorage.removeItem(STORAGE_KEYS.CURRENT_USER_ID);
        state.studentStep = 'code_portal';
        renderApp();
      });

      document.getElementById('btn-leave-waiting-room')?.addEventListener('click', () => {
        clearIntervalTimer();
        state.currentParticipant = null;
        localStorage.removeItem(STORAGE_KEYS.CURRENT_USER_ID);
        state.studentStep = 'code_portal';
        renderApp();
      });

      document.getElementById('btn-play-again')?.addEventListener('click', () => {
        clearIntervalTimer();
        state.currentParticipant = null;
        localStorage.removeItem(STORAGE_KEYS.CURRENT_USER_ID);
        state.studentStep = 'code_portal';
        renderApp();
      });

      document.getElementById('btn-join-another-quiz')?.addEventListener('click', () => {
        clearIntervalTimer();
        state.currentParticipant = null;
        localStorage.removeItem(STORAGE_KEYS.CURRENT_USER_ID);
        state.studentStep = 'code_portal';
        renderApp();
      });

      const adminLoginForm = document.getElementById('admin-login-form');
      adminLoginForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('admin-email')?.value?.trim().toLowerCase();
        const pass = document.getElementById('admin-password')?.value;

        if (email === 'ezhilarasanm2005@gmail.com' && pass === 'ezhilezhil3030') {
          state.isAdminLoggedIn = true;
          state.adminView = 'quizzes_list';
          renderApp();
        } else {
          alert('Invalid admin credentials! Please check your email and password and try again.');
        }
      });

      const togglePassBtn = document.getElementById('btn-toggle-password-visibility');
      togglePassBtn?.addEventListener('click', () => {
        const passInput = document.getElementById('admin-password');
        if (!passInput) return;
        if (passInput.type === 'password') {
          passInput.type = 'text';
          togglePassBtn.innerHTML = icon('eyeOff');
          togglePassBtn.title = 'Hide Password';
        } else {
          passInput.type = 'password';
          togglePassBtn.innerHTML = icon('eye');
          togglePassBtn.title = 'Show Password';
        }
      });

      document.querySelectorAll('.btn-manage-quiz').forEach(btn => {
        btn.addEventListener('click', () => {
          const qId = btn.getAttribute('data-id');
          if (qId) {
            state.managingQuizId = qId;
            state.adminView = 'quiz_inside_manage';
            renderApp();
          }
        });
      });

      document.querySelectorAll('.btn-dashboard-start-quiz').forEach(btn => {
        btn.addEventListener('click', () => {
          const qId = btn.getAttribute('data-id');
          const quiz = state.quizzes.find(q => q.id === qId);
          if (qId) quiz?.status === 'active' ? stopQuizInside(qId) : startQuizInside(qId);
        });
      });

      document.querySelectorAll('.btn-view-scoreboard-separate').forEach(btn => {
        btn.addEventListener('click', () => {
          const qId = btn.getAttribute('data-id');
          if (qId) {
            state.managingQuizId = qId;
            state.scoreboardReturnView = 'quizzes_list';
            state.adminView = 'live_scoreboard_page';
            renderApp();
          }
        });
      });

      document.getElementById('btn-view-scoreboard-separate-inside')?.addEventListener('click', (event) => {
        event.preventDefault();
        state.scoreboardReturnView = 'quiz_inside_manage';
        state.adminView = 'live_scoreboard_page';
        renderApp();
      });

      document.getElementById('btn-return-from-scoreboard-page')?.addEventListener('click', (event) => {
        event.preventDefault();
        state.currentView = 'admin';
        state.isAdminLoggedIn = true;
        state.adminView = state.scoreboardReturnView === 'quizzes_list'
          ? 'quizzes_list'
          : 'quiz_inside_manage';
        renderApp();
      });

      document.getElementById('btn-toggle-scoreboard-mode-table')?.addEventListener('click', (event) => {
        event.preventDefault();
        state.scoreboardDisplayMode = 'live_table';
        renderApp();
      });

      document.getElementById('btn-toggle-scoreboard-mode-podium')?.addEventListener('click', (event) => {
        event.preventDefault();
        state.scoreboardDisplayMode = 'podium';
        triggerConfetti(3000);
        renderApp();
      });

      document.getElementById('btn-scoreboard-start-quiz')?.addEventListener('click', (e) => {
        const qId = e.currentTarget.getAttribute('data-id');
        const quiz = state.quizzes.find(q => q.id === qId);
        if (qId) quiz?.status === 'active' ? stopQuizInside(qId) : startQuizInside(qId);
      });

      document.getElementById('btn-scoreboard-show-results')?.addEventListener('click', (e) => {
        const qId = e.currentTarget.getAttribute('data-id');
        if (qId) {
          state.scoreboardDisplayMode = 'podium';
          revealResultsInside(qId);
        }
      });

      document.getElementById('btn-scoreboard-reset-session')?.addEventListener('click', (e) => {
        const qId = e.currentTarget.getAttribute('data-id');
        if (qId) resetSessionInside(qId);
      });

      document.querySelectorAll('.btn-delete-quiz').forEach(btn => {
        btn.addEventListener('click', () => {
          const qId = btn.getAttribute('data-id');
          if (qId) deleteQuiz(qId);
        });
      });

      document.getElementById('btn-admin-nav-create')?.addEventListener('click', () => {
        state.adminView = 'create_quiz';
        renderApp();
      });

      document.getElementById('btn-cancel-create-quiz')?.addEventListener('click', () => {
        state.adminView = 'quizzes_list';
        renderApp();
      });

      document.getElementById('btn-back-to-quizzes-list')?.addEventListener('click', () => {
        state.adminView = 'quizzes_list';
        renderApp();
      });

      // Manage Quiz Code, Time & Points settings handlers
      document.getElementById('btn-generate-quiz-code')?.addEventListener('click', () => {
        const codeInput = document.getElementById('manage-quiz-code');
        if (codeInput) {
          codeInput.value = `BB-${Math.floor(1000 + Math.random() * 9000)}`;
        }
      });

      document.getElementById('btn-random-create-code')?.addEventListener('click', () => {
        const codeInput = document.getElementById('new-q-code');
        if (codeInput) {
          codeInput.value = `BB-${Math.floor(1000 + Math.random() * 9000)}`;
        }
      });

      const manageTimerPresets = document.getElementById('manage-quiz-timer-presets');
      manageTimerPresets?.addEventListener('change', (e) => {
        const val = e.target.value;
        const timerInput = document.getElementById('manage-quiz-timer');
        if (val && timerInput) {
          timerInput.value = val;
        }
      });

      const managePointsPresets = document.getElementById('manage-quiz-points-presets');
      managePointsPresets?.addEventListener('change', (e) => {
        const val = e.target.value;
        const pointsInput = document.getElementById('manage-quiz-points');
        if (val && pointsInput) {
          pointsInput.value = val;
        }
      });

      const formManageSettings = document.getElementById('form-manage-quiz-settings');
      formManageSettings?.addEventListener('submit', (e) => {
        e.preventDefault();
        const quiz = getManagingQuiz();
        if (!quiz) return;

        const codeVal = document.getElementById('manage-quiz-code')?.value?.trim().toUpperCase().replace(/\s+/g, '-');
        const titleVal = document.getElementById('manage-quiz-title')?.value?.trim();
        const timerVal = parseInt(document.getElementById('manage-quiz-timer')?.value || '20', 10);
        const pointsVal = parseInt(document.getElementById('manage-quiz-points')?.value || '100', 10);
        const catVal = document.getElementById('manage-quiz-category')?.value?.trim();
        const speedBonusVal = document.getElementById('manage-quiz-speed-bonus')?.checked ?? true;

        if (!codeVal) {
          alert('Please enter a valid quiz access code (e.g. BB-8942, JS-PRO).');
          return;
        }

        const duplicateQuiz = state.quizzes.find(q => q.id !== quiz.id && q.code.toUpperCase() === codeVal);
        if (duplicateQuiz) {
          alert(`Quiz code "${codeVal}" is already in use by another quiz ("${duplicateQuiz.title}"). Please specify a unique code.`);
          return;
        }

        if (!titleVal) {
          alert('Please enter a valid quiz title.');
          return;
        }

        if (isNaN(timerVal) || timerVal < 5) {
          alert('Please enter a valid timer (minimum 5 seconds).');
          return;
        }

        if (isNaN(pointsVal) || pointsVal < 10) {
          alert('Please enter valid points per question (minimum 10 points).');
          return;
        }

        const oldCode = quiz.code;
        const codeChanged = oldCode !== codeVal;

        quiz.code = codeVal;
        quiz.title = titleVal;
        quiz.timerPerQuestion = timerVal;
        quiz.pointsPerQuestion = pointsVal;
        quiz.category = catVal || quiz.category;
        quiz.speedBonusEnabled = speedBonusVal;

        if (codeChanged) {
          // Update any participants registered under old code
          state.participants.forEach(p => {
            if (p.quizCode === oldCode) {
              p.quizCode = codeVal;
            }
          });
          saveParticipants(state.participants);

          if (state.activeQuizCode === oldCode) {
            state.activeQuizCode = codeVal;
            localStorage.setItem(STORAGE_KEYS.ACTIVE_CODE, codeVal);
          }

          if (state.currentParticipant && state.currentParticipant.quizCode === oldCode) {
            state.currentParticipant.quizCode = codeVal;
          }
        }

        // Persist and Sync
        saveQuizzes(state.quizzes);
        if (state.selectedQuiz?.id === quiz.id) {
          state.selectedQuiz = quiz;
        }
        broadcastMessage('QUIZ_SETTINGS_UPDATED', { quiz, oldCode, newCode: codeVal, codeChanged });

        renderApp();

        // Flash success message
        const msg = document.getElementById('settings-save-success-msg');
        if (msg) {
          msg.style.display = 'inline-block';
          setTimeout(() => {
            if (msg) msg.style.display = 'none';
          }, 3500);
        }
      });

      document.getElementById('btn-inside-start-quiz')?.addEventListener('click', (e) => {
        const qId = e.currentTarget.getAttribute('data-id');
        const quiz = state.quizzes.find(q => q.id === qId);
        if (qId) quiz?.status === 'active' ? stopQuizInside(qId) : startQuizInside(qId);
      });

      document.getElementById('btn-inside-show-results')?.addEventListener('click', (e) => {
        const qId = e.currentTarget.getAttribute('data-id');
        if (qId) revealResultsInside(qId);
      });

      document.getElementById('btn-inside-reset-session')?.addEventListener('click', (e) => {
        const qId = e.currentTarget.getAttribute('data-id');
        if (qId) resetSessionInside(qId);
      });

      document.getElementById('btn-inside-add-question-modal')?.addEventListener('click', () => {
        state.isAddQuestionModalOpen = true;
        renderApp();
      });
      document.getElementById('btn-inside-add-question-modal-2')?.addEventListener('click', () => {
        state.isAddQuestionModalOpen = true;
        renderApp();
      });

      document.getElementById('btn-close-add-q-modal')?.addEventListener('click', () => {
        state.isAddQuestionModalOpen = false;
        renderApp();
      });
      document.getElementById('btn-cancel-add-q')?.addEventListener('click', () => {
        state.isAddQuestionModalOpen = false;
        renderApp();
      });

      const addQModalForm = document.getElementById('form-modal-add-question');
      addQModalForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const quiz = getManagingQuiz();
        if (!quiz) return;

        const text = document.getElementById('modal-q-text')?.value;
        const opt0 = document.getElementById('modal-opt-0')?.value;
        const opt1 = document.getElementById('modal-opt-1')?.value;
        const opt2 = document.getElementById('modal-opt-2')?.value;
        const opt3 = document.getElementById('modal-opt-3')?.value;
        const correct = parseInt(document.querySelector('input[name="modal-correct"]:checked')?.value || '0', 10);

        const newQ = {
          id: `q-${Date.now()}`,
          questionText: text,
          options: [opt0, opt1, opt2, opt3],
          correctAnswerIndex: correct,
          category: quiz.category
        };

        quiz.questions.push(newQ);
        saveQuizzes(state.quizzes);
        state.isAddQuestionModalOpen = false;
        renderApp();
      });

      document.querySelectorAll('.btn-delete-question').forEach(btn => {
        btn.addEventListener('click', () => {
          const quizId = btn.getAttribute('data-quizid');
          const qId = btn.getAttribute('data-qid');
          if (quizId && qId) deleteQuestionFromQuiz(quizId, qId);
        });
      });

      document.getElementById('btn-add-question-row')?.addEventListener('click', () => {
        state.newQuestions.push({
          id: `q-custom-${Date.now()}`,
          questionText: '',
          options: ['', '', '', ''],
          correctAnswerIndex: 0,
          category: state.newQuizCategory
        });
        renderApp();
      });

      document.querySelectorAll('.remove-question-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-index') || '0', 10);
          state.newQuestions.splice(idx, 1);
          renderApp();
        });
      });

      document.querySelectorAll('.q-text-input').forEach(input => {
        input.addEventListener('input', (e) => {
          const idx = parseInt(e.target.getAttribute('data-index') || '0', 10);
          state.newQuestions[idx].questionText = e.target.value;
        });
      });

      document.querySelectorAll('.q-option-input').forEach(input => {
        input.addEventListener('input', (e) => {
          const qIdx = parseInt(e.target.getAttribute('data-qindex') || '0', 10);
          const oIdx = parseInt(e.target.getAttribute('data-oindex') || '0', 10);
          state.newQuestions[qIdx].options[oIdx] = e.target.value;
        });
      });

      document.querySelectorAll('.q-correct-radio').forEach(radio => {
        radio.addEventListener('change', (e) => {
          const qIdx = parseInt(e.target.getAttribute('data-qindex') || '0', 10);
          const oIdx = parseInt(e.target.getAttribute('data-oindex') || '0', 10);
          state.newQuestions[qIdx].correctAnswerIndex = oIdx;
        });
      });

      const creatorForm = document.getElementById('quiz-creator-form');
      creatorForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const codeInputVal = document.getElementById('new-q-code')?.value?.trim().toUpperCase().replace(/\s+/g, '-');
        const title = document.getElementById('new-q-title')?.value;
        const timer = parseInt(document.getElementById('new-q-timer')?.value || '20', 10);
        const points = parseInt(document.getElementById('new-q-points')?.value || '100', 10);

        const chosenCode = codeInputVal || `BB-${Math.floor(1000 + Math.random() * 9000)}`;

        const duplicate = state.quizzes.find(q => q.code.toUpperCase() === chosenCode);
        if (duplicate) {
          alert(`Quiz code "${chosenCode}" is already in use by another quiz. Please enter a different code.`);
          return;
        }

        const newQuiz = {
          id: `quiz-${Date.now()}`,
          code: chosenCode,
          title: title || 'Custom Arena Championship',
          description: 'Custom arena created via Admin Portal',
          category: 'General Engineering',
          timerPerQuestion: timer,
          pointsPerQuestion: points,
          speedBonusEnabled: true,
          status: 'lobby',
          currentQuestionIndex: 0,
          createdAt: Date.now(),
          questions: state.newQuestions
        };

        state.quizzes = [newQuiz, ...state.quizzes];
        saveQuizzes(state.quizzes);
        state.managingQuizId = newQuiz.id;
        state.adminView = 'quiz_inside_manage';
        state.selectedQuiz = newQuiz;
        state.activeQuizCode = newQuiz.code;
        renderApp();
      });
    }

    renderApp();
    if (state.currentView === 'student' && state.studentStep === 'active_quiz') {
      startQuestionTimer();
    }
    initializeSupabaseSync();