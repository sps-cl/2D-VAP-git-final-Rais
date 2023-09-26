Vue.createApp({
    data() {
      return {
        valueInput: '',
        needDoList: [],
        completeList: []
      };
    },
    methods: {
      handleInput (event) {
        this.valueInput = event.target.value;
      },
      addTask () {
        if(this.valueInput === '') { return };
        this.needDoList.push({
          title: this.valueInput,
          id: Math.random()
        });
        this.valueInput = '';
      },
      doCheck (index, type) {
  
        if(type === 'need') {
          const completeMask = this.needDoList.splice(index, 1);
          this.completeList.push(...completeMask);
        }
        else {
          const noCompleteMask = this.completeList.splice(index, 1);
          this.needDoList.push(...noCompleteMask);
        }
      },
    }
  }
  ).mount('#app');